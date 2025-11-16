import { ScheduleRow } from '@/types/contract';
import { monthLabel, addMonthsIso } from './date';

export type ScheduleInput = {
  cashPrice: number;
  markupRate: number; // 0..1
  downPayment: number; // руб.
  termMonths: number;
  firstDueDate: string; // YYYY-MM-DD
};

export type ScheduleResult = {
  salePrice: number;
  principal: number;
  rows: ScheduleRow[];
};

export function buildSchedule(input: ScheduleInput): ScheduleResult {
  const salePrice = round2(input.cashPrice * (1 + input.markupRate));
  const principal = round2(salePrice - input.downPayment);
  const base = round2(principal / input.termMonths);

  const rows: ScheduleRow[] = [];
  for (let i = 0; i < input.termMonths; i++) {
    const due =
      i === 0 ? input.firstDueDate : addMonthsIso(input.firstDueDate, i);
    rows.push({
      seq: i + 1,
      monthLabel: monthLabel(due),
      dueDate: due,
      amount: base,
    });
  }
  // корректируем копейки в последнем платеже
  const sum = round2(rows.reduce((s, r) => s + r.amount, 0));
  const diff = round2(principal - sum);
  rows[rows.length - 1].amount = round2(rows[rows.length - 1].amount + diff);

  return { salePrice, principal, rows };
}

export function round2(n: number) {
  return Math.round(n * 100) / 100;
}
