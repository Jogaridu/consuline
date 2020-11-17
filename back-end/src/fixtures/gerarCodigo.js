module.exports = function gerarCodigoVerificacao() {

    let codigo = "";

    for (let index = 0; index < 4; index++) {
        codigo += Math.floor(Math.random() * 10) + "";
    }

    return codigo

}