import { addDays, format, parseISO } from 'date-fns';
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