import React from 'react';
import KPI from '@/components/kpi/KPI';
import Card from '@/components/ui/Card';
import Table from '@/components/ui/Table';

export default function DashboardPage() {
  return (
    <div style={{ display: 'grid', gap: 12 }}>
      <KPI />
      <Card title="Платежи на этой неделе">
        <Table
          columns={[
            { key: 'client', title: 'Клиент' },
            { key: 'deal', title: 'Сделка' },
            { key: 'date', title: 'Дата' },
            { key: 'amount', title: 'Сумма', align: 'right' },
          ]}
          rows={[
            {
              client: 'Ибрагим Магомедов',
              deal: 'TV Samsung 55"',
              date: '08.11.2025',
              amount: '18 500 ₽',
            },
          ]}
        />
      </Card>
    </div>
  );
}
