import React from 'react';
import Card from '@/components/ui/Card';
import Table from '@/components/ui/Table';

export default function PaymentsPage() {
  return (
    <Card title="Платежи">
      <Table
        columns={[
          { key: 'deal', title: 'Сделка' },
          { key: 'client', title: 'Клиент' },
          { key: 'date', title: 'Дата' },
          { key: 'method', title: 'Способ' },
          { key: 'sum', title: 'Сумма', align: 'right' },
        ]}
        rows={[
          {
            deal: 'D-2025-0012',
            client: 'И. Магомедов',
            date: '06.11.2025',
            method: 'Наличные',
            sum: '18 500 ₽',
          },
        ]}
      />
    </Card>
  );
}
