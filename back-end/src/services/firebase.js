const admin = require("firebase-admin");

const contaServico = require("../config/firebase-key.json");

const BUCKET = "consuline.appspot.com";

admin.initializeApp({
  credential: admin.credential.cert(
    process.env.FIREBASE_PRIVATE_KEY
      ? {
          type: "service_account",
          project_id: "consuline",
          private_key_id: "420156e43a96ab6c5c89a664dde9c72613a056b8", 
          private_key: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, "\n"),
          client_email: process.env.FIREBASE_CLIENTE_EMAIL,
          client_id: "107540955869457917562",
          auth_uri: "https://accounts.google.com/o/oauth2/auth",
          token_uri: "https://oauth2.googleapis.com/token",
          auth_provider_x509_cert_url:
            "https://www.googleapis.com/oauth2/v1/certs",
          client_x509_cert_url:
            "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-z830z%40consuline.iam.gserviceaccount.com",
        }
      : contaServico
  ),
  storageBucket: BUCKET, 
});

const bucket = admin.storage().bucket();

const enviarArquivo = (req, res, next) => {
  if (!req.file) {
    return next();
  }

  const arquivo = req.file;

  const nomeArquivo = `${Date.now()}.${arquivo.originalname.split(".").pop()}`;

  const arquivoBucket = bucket.file(nomeArquivo);

  const file = bucket.file(nomeArquivo);

  const stream = arquivoBucket.createWriteStream({
    metadata: {
      contentType: arquivo.mimetype,
    },
  });

  stream.on("error", (error) => console.log(error));

  stream.on("finish", async () => {
    await file.makePublic();

    req.file.firebaseUrl = `https://storage.googleapis.com/${BUCKET}/${nomeArquivo}`;

    return next();
  });

  stream.end(arquivo.buffer);
};

module.exports = enviarArquivo;
