export default (dadosInputs, opcional = "") => {
    const arrayInputsVazias = [];

    for (let dado in dadosInputs) {

        if (dadosInputs[dado] === "") {
            arrayInputsVazias.push(dado);

        }

    }

    return arrayInputsVazias.filter(campo => campo != opcional);
}