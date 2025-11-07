import React from 'react';
import Card from '@/components/ui/Card';
import Input from '@/components/ui/Input';
import { Row, Col6, Col3, Col12 } from '@/components/forms/FormRow';
import Button from '@/components/ui/Button';

export default function SettingsPage() {
  return (
    <div style={{ display: 'grid', gap: 12 }}>
      <Card title="Организация">
        <Row>
          <Col6>
            <Input label="Юр. лицо" placeholder="ООО «Аль‑Мурабаха»" />
          </Col6>
          <Col3>
            <Input label="ИНН" />
          </Col3>
          <Col3>
            <Input label="Телефон" />
          </Col3>
          <Col12>
            <Input label="Адрес" />
          </Col12>
        </Row>
      </Card>
      <Card title="Интеграции">
        <Row>
          <Col6>
            <Input label="SMS провайдер" placeholder="SMS Aero / sms.ru" />
          </Col6>
          <Col6>
            <Input label="Эквайринг" placeholder="ЮKassa / Сбер / Тинькофф" />
          </Col6>
        </Row>
        <div
          style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 8 }}
        >
          <Button variant="primary">Сохранить</Button>
        </div>
      </Card>
    </div>
  );
}
