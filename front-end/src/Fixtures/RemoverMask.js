export default function RemoverMask(dado) {
    return dado.replace(/[^0-9]+/g, '');
}