import { format, isExists, isFuture } from "date-fns";

export default function (dataBr) {

    let [dia, mes, ano] = dataBr.split("/");

    dia = Number(dia);
    mes = Number(mes - 1);
    ano = Number(ano);


    const dataObj = new Date(ano, mes, dia);

    if (isExists(ano, mes, dia)) {
        if (!isFuture(dataObj)) {
            return format(dataObj, 'yyyy-MM-dd');

        }
    }

    return false;
}

export function converterDataBr(dataEn) {
    let [ano, mes, dia] = dataEn.split("-");

    const dataObj = new Date(ano, mes, dia);

    return format(dataObj, 'dd/MM/yyyy');
}