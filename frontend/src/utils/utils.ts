import { addDays, format, parseISO, parse } from 'date-fns';
import { ptBR } from 'date-fns/locale';

export function getDaysBetweenDates(startDate: string, endDate: string): string[] {

    const days: string[] = [];
    let currentDate: Date = parseISO(startDate);
    if (startDate === endDate) {
        const day: string[] = [format(currentDate, 'MMM dd', { locale: ptBR }).toLowerCase()]
        return day
    }

    const endDateTime: Date = addDays(parseISO(endDate), 1);

    while (currentDate < endDateTime) {
        days.push(format(currentDate, 'MMM dd', { locale: ptBR }).toLowerCase());
        currentDate = addDays(currentDate, 1);
    }

    return days;
}

export function getCurrentDateFormatted() {
    const currentDate = new Date();

    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    const day = String(currentDate.getDate()).padStart(2, '0');

    return `${year}${month}${day}`;
}



export function formataData(data: string): string {
    const [mes, dia] = data.split(' ');
    const ano = new Date().getFullYear();

    const meses: { [key: string]: number } = {
        jan: 1,
        fev: 2,
        mar: 3,
        abr: 4,
        mai: 5,
        jun: 6,
        jul: 7,
        ago: 8,
        set: 9,
        out: 10,
        nov: 11,
        dez: 12,
    };

    const mesNumero = meses[mes.toLowerCase().trim()];
    if (!mesNumero) {
        throw new Error('Mês inválido.');
    }

    const dataCompleta = new Date(ano, mesNumero - 1, parseInt(dia, 10));
    const dataFormatada = format(dataCompleta, 'yyyy-MM-dd');

    return dataFormatada;
}

export function formatarDataInverso(data: string): string {
    const [ano, mes, dia] = data.split('-');

    const meses: { [key: number]: string } = {
        1: 'jan',
        2: 'fev',
        3: 'mar',
        4: 'abr',
        5: 'mai',
        6: 'jun',
        7: 'jul',
        8: 'ago',
        9: 'set',
        10: 'out',
        11: 'nov',
        12: 'dez',
    };

    const mesNumero = parseInt(mes, 10);
    if (!(mesNumero >= 1 && mesNumero <= 12)) {
        throw new Error('Mês inválido.');
    }

    const mesAbreviado = meses[mesNumero];

    const dataCompleta = parseISO(`${ano}-${mes}-${dia}`);
    const dataFormatada = format(dataCompleta, 'MMM dd', { locale: ptBR });

    return dataFormatada;
}