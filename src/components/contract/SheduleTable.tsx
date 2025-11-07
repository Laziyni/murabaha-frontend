import React from 'react';
import Table from '@/components/ui/Table';
import { rub } from '@/utils/money';
import { ScheduleRow } from '@/types/contract';

export default function ScheduleTable({ rows }: { rows: ScheduleRow[] }) {
  return (
    <>
      <Table
        columns={[
          { key: 'seq', title: '№' },
          { key: 'monthLabel', title: 'Месяц' },
          { key: 'dueDate', title: 'Дата' },
          { key: 'amount', title: 'Платеж', align: 'right' },
        ]}
        rows={rows.map((r) => ({ ...r, amount: `${rub(r.amount)} ₽` }))}
      />
    </>
  );
}
