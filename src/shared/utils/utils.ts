import moment from 'moment';

//конвертер даты в строку типа 21.03.2021 16:11 по умолчанию или по заданному формату
export const dateConverter = (data: string | Date, format?: string) => {
    if (typeof data === 'undefined' || data === null) {
        return '';
    }
    moment.locale('ru')
    return moment(data).format(format || "DD.MM.yyyy HH:mm");
}