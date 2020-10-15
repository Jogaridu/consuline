// arrInputs é um array com todas as inputs da tela

import InputIncorreta from "./InputIncorreta";

export default (arrInputs) => {

    const arrayInputVazias = [];

    arrInputs.forEach(input => {
        if (input.value === "") {
            arrayInputVazias.push(input);
        } 
    });

    InputIncorreta(arrayInputVazias);

    return true;
}