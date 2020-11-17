const admin = require("firebase-admin");

const contaServico = require("../config/firebase-key.json");

const BUCKET = "consuline.appspot.com";

admin.initializeApp({
    credential: admin.credential.cert(contaServico),
    storageBucket: BUCKET
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
            contentType: arquivo.mimetype
        }
    });

    stream.on("error", error => console.log(error));

    stream.on("finish", async () => {

        await file.makePublic();

        req.file.firebaseUrl = `https://storage.googleapis.com/${BUCKET}/${nomeArquivo}`

        return next();
    });

    stream.end(arquivo.buffer);
}

module.exports = enviarArquivo;