import React from 'react';
import Card from '@/components/ui/Card';
import Table from '@/components/ui/Table';

export default function ClientsPage() {
  return (
    <Card title="Клиенты">
      <Table
        columns={[
          { key: 'name', title: 'ФИО' },
          { key: 'phone', title: 'Телефон' },
          { key: 'deals', title: 'Открытых' },
          { key: 'onTime', title: 'Вовремя' },
        ]}
        rows={[
          {
            name: 'Амина Алиева',
            phone: '+7 901 777‑22‑33',
            deals: 2,
            onTime: '76%',
          },
        ]}
      />
    </Card>
  );
}
