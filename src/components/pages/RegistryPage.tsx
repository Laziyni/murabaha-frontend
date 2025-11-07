import React from 'react';
import Card from '@/components/ui/Card';
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';

export default function RegistryPage() {
  return (
    <Card title="Реестр надежности (анонимные агрегаты)">
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 10rem',
          gap: 8,
        }}
      >
        <Input label="Телефон" placeholder="+7" />
        <Input label="Дата рождения" type="date" />
        <Button variant="primary">Проверить</Button>
      </div>
      <div style={{ marginTop: 8, color: 'var(--muted)' }}>
        Результат: OK — on‑time 92%, max DPD 5, открытых 1
      </div>
    </Card>
  );
}
