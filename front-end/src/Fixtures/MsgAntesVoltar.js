import Swal from "sweetalert2";

const MsgAntesVoltar = async () => {

    let confirma = false;

    await Swal.fire({
        title: 'Quer realmente voltar?',
        text: "Todos os dados adicionados/modificados serão apagados",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#403E66',
        cancelButtonColor: '#ccc',
        confirmButtonText: 'Sim, quero voltar',
        cancelButtonText: "Cancelar"
    }).then((result) => {
        if (result.isConfirmed) {
            confirma = true;

        }
    });

    return confirma;
}

export default MsgAntesVoltar;