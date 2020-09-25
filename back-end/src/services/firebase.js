const admin = require("firebase-admin");

const contaServico = require("../config/firebase-key.json");

const BUCKET = "consuline.appspot.com";

admin.initializeApp({
    credential: admin.credential.cert(contaServico),
    storageBucket: BUCKET
});

const bucket = admin.storage().bucket();

const enviarImagem = (req, res, next) => {

    if (!req.file) {
        return next();
    }

    const imagem = req.file;

    const nomeArquivo = `${Date.now()}.${imagem.originalname.split(".").pop()}`;

    const arquivo = bucket.file(nomeArquivo);

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