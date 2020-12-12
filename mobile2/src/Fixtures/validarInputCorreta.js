import colors from "../Styles/colors";

export function validarInputCorreta(dado, input) {

    if (dado !== "") {
        input.current.setNativeProps({ style: { borderColor: "green" } })

    } else {
        input.current.setNativeProps({ style: { borderColor: colors.principal } })


    }

}

export function validarInputMaskCorreta(dado, input) {

    if (dado !== "") {
        input.current.getElement().setNativeProps({ style: { borderColor: "green" } })

    } else {
        input.current.getElement().setNativeProps({ style: { borderColor: colors.principal } })

    }
}
