<<<<<<< HEAD
<<<<<<< HEAD
var admin = require("firebase-admin");

var serviceAccount = require("../config/firebase-key.json");
=======
const admin = require("firebase-admin");

const contaServico = require("../config/firebase-key.json");
>>>>>>> c4cf7c49dfe3af7538d5e38a9fcc10f292694ca1
=======
const admin = require("firebase-admin");

const contaServico = require("../config/firebase-key.json");
>>>>>>> 94ae0017559ec3111deb5af277847d1f9422693b

const BUCKET = "consuline.appspot.com";

admin.initializeApp({
<<<<<<< HEAD
<<<<<<< HEAD
  credential: admin.credential.cert(serviceAccount),
  storageBucket: BUCKET,
=======
    credential: admin.credential.cert(contaServico),
    storageBucket: BUCKET
>>>>>>> c4cf7c49dfe3af7538d5e38a9fcc10f292694ca1
=======
  credential: admin.credential.cert(
    process.env.FIREBASE_PRIVATE_KEY
      ? {
          type: "service_account",
          project_id: "consuline",
          private_key_id: "420156e43a96ab6c5c89a664dde9c72613a056b8", 
          private_key: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, "\n"),
          client_email: process.env.FIREBASE_CLIENT_EMAIL,
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
>>>>>>> 94ae0017559ec3111deb5af277847d1f9422693b
});

const bucket = admin.storage().bucket();

<<<<<<< HEAD
<<<<<<< HEAD
const uploadImage = (request, response, next) => {
  if (!request.file) return next();
=======
const enviarArquivo = (req, res, next) => {
  if (!req.file) {
    return next();
  }

  const arquivo = req.file;
>>>>>>> 94ae0017559ec3111deb5af277847d1f9422693b

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
<<<<<<< HEAD
    request.file.firebaseUrl =
      `https://storage.googleapis.com/${BUCKET}/${nomeArquivo}`;
  
    next();
  });

  stream.end(imagem.buffer);
};

module.exports = uploadImage;
=======
const enviarImagem = (req, res, next) => {

    if (!req.file) {
        return next();
    }

    const imagem = req.file;
=======
>>>>>>> 94ae0017559ec3111deb5af277847d1f9422693b

    req.file.firebaseUrl = `https://storage.googleapis.com/${BUCKET}/${nomeArquivo}`;

    return next();
  });

  stream.end(arquivo.buffer);
};

<<<<<<< HEAD
module.exports = enviarImagem;
>>>>>>> c4cf7c49dfe3af7538d5e38a9fcc10f292694ca1
=======
module.exports = enviarArquivo;
>>>>>>> 94ae0017559ec3111deb5af277847d1f9422693b
