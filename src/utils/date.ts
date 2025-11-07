import dayjs from 'dayjs';
import 'dayjs/locale/ru';
dayjs.locale('ru');


export const fmtDate = (iso: string) => dayjs(iso).format('DD.MM.YYYY');
export const monthLabel = (iso: string) => dayjs(iso).format('MMMM YYYY');
export const addMonthsIso = (iso: string, months: number) => dayjs(iso).add(months, 'month').format('YYYY-MM-DD');