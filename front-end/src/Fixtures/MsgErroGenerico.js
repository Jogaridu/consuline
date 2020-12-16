import Swal from "sweetalert2";

export default () => Swal.fire(
    'Erro 404',
    'Um problema com o servidor foi encontrado, tente novamente mais tarde.',
    'error'
);