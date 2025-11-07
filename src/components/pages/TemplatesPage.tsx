import React from 'react';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';

export default function TemplatesPage() {
  return (
    <div style={{ display: 'grid', gap: 12 }}>
      <Card title="Шаблоны">
        <div style={{ display: 'flex', gap: 8 }}>
          <Button>Импорт</Button>
          <Button variant="primary">Новый шаблон</Button>
        </div>
      </Card>
    </div>
  );
}
