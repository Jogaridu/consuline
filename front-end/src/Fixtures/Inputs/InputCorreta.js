export default (evento, optiong={}) => {
    if (evento.target.value !== "") {
        evento.target.style.borderColor = "green";
    }

}