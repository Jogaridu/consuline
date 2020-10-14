<<<<<<< HEAD
var admin = require("firebase-admin");

var serviceAccount = require("../config/firebase-key.json");
=======
const admin = require("firebase-admin");

const contaServico = require("../config/firebase-key.json");
>>>>>>> c4cf7c49dfe3af7538d5e38a9fcc10f292694ca1

const BUCKET = "consuline.appspot.com";

admin.initializeApp({
<<<<<<< HEAD
  credential: admin.credential.cert(serviceAccount),
  storageBucket: BUCKET,
=======
    credential: admin.credential.cert(contaServico),
    storageBucket: BUCKET
>>>>>>> c4cf7c49dfe3af7538d5e38a9fcc10f292694ca1
});

const bucket = admin.storage().bucket();

<<<<<<< HEAD
const uploadImage = (request, response, next) => {
  if (!request.file) return next();

  const imagem = request.file;
 
  const nomeArquivo = Date.now() + "." + imagem.originalname.split(".").pop();

  const file = bucket.file(nomeArquivo);

  const stream = file.createWriteStream({
    metadata: {
      contentType: imagem.mimetype,
    },
  });

  stream.on("error", (e) => {
    console.error(e);
  });

  stream.on("finish", async () => {
    await file.makePublic();
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

    const nomeArquivo = `${Date.now()}.${imagem.originalname.split(".").pop()}`;

    const arquivo = bucket.file(nomeArquivo);

    const file = bucket.file(nomeArquivo);

    const stream = arquivo.createWriteStream({
        metadata: {
            contentType: imagem.mimetype
        }
    });

    stream.on("error", error => console.log(error));

    stream.on("finish", async () => {

        await file.makePublic();

        req.file.firebaseUrl = `https://storage.googleapis.com/${BUCKET}/${nomeArquivo}`

        return next();
    });

    stream.end(imagem.buffer);
}

module.exports = enviarImagem;
>>>>>>> c4cf7c49dfe3af7538d5e38a9fcc10f292694ca1
