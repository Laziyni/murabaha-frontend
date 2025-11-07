import React, { useMemo, useState } from 'react';
import Card from '@/components/ui/Card';
import Input from '@/components/ui/Input';
import Select from '@/components/ui/Select';
import Button from '@/components/ui/Button';
import {
  Row,
  Col6,
  Col4,
  Col12,
  SectionTitle,
  Col3,
} from '@/components/forms/FormRow';
import { buildSchedule } from '@/utils/schedule';
import { rub } from '@/utils/money';
import { DealDraft } from '@/types/contract';
// import ScheduleTable from './ScheduleTable';
import DocumentPreview from './DocumentPreview';
// import ConsentPreview from './ConsentPreview';
import s from './DealWizard.module.css';
import ScheduleTable from './SheduleTable';
import ConsentPreview from './ConsertPreview';

export default function DealWizard() {
  const [buyer, setBuyer] = useState({
    fullName: '',
    birthDate: '',
    phone: '',
    passportSeries: '',
    passportNumber: '',
    address: '',
  });
  const [guarantor, setGuarantor] = useState({
    fullName: '',
    phone: '',
    passportSeries: '',
    passportNumber: '',
  });
  const [seller] = useState({ fullName: 'ИП/ООО «Ваше юр. лицо»' });
  const [product, setProduct] = useState({ title: '', cashPrice: 0 });
  const [terms, setTerms] = useState({
    city: 'г. Грозный',
    contractNo: '957',
    contractDate: new Date().toISOString().slice(0, 10),
    markupRate: 0.15,
    downPayment: 0,
    termMonths: 6,
    firstDueDate: new Date().toISOString().slice(0, 10),
  });

  const schedule = useMemo(
    () =>
      buildSchedule({
        cashPrice: product.cashPrice || 0,
        markupRate: terms.markupRate,
        downPayment: terms.downPayment || 0,
        termMonths: terms.termMonths,
        firstDueDate: terms.firstDueDate,
      }),
    [
      product.cashPrice,
      terms.markupRate,
      terms.downPayment,
      terms.termMonths,
      terms.firstDueDate,
    ]
  );

  const draft: DealDraft = useMemo(
    () => ({
      buyer,
      guarantor,
      seller,
      product,
      terms,
      schedule: schedule.rows,
      salePrice: schedule.salePrice,
      principal: schedule.principal,
    }),
    [buyer, guarantor, seller, product, terms, schedule]
  );

  const save = () => {
    // тут вызов Api.saveDealDraft(draft) — подключите бэк при готовности
    console.log('DEAL_DRAFT', draft);
    alert('Черновик сделки сохранён в консоли. Подключите Api.saveDealDraft.');
  };

  return (
    <div className={s.wizard}>
      <Card title="1) Покупатель">
        <Row>
          <Col6>
            <Input
              label="ФИО"
              value={buyer.fullName}
              onChange={(e) => setBuyer({ ...buyer, fullName: e.target.value })}
            />
          </Col6>
          <Col3>
            <Input
              type="date"
              label="Дата рождения"
              value={buyer.birthDate}
              onChange={(e) =>
                setBuyer({ ...buyer, birthDate: e.target.value })
              }
            />
          </Col3>
          <Col3>
            <Input
              label="Телефон"
              value={buyer.phone}
              onChange={(e) => setBuyer({ ...buyer, phone: e.target.value })}
            />
          </Col3>
          <Col3>
            <Input
              label="Паспорт: серия"
              value={buyer.passportSeries}
              onChange={(e) =>
                setBuyer({ ...buyer, passportSeries: e.target.value })
              }
            />
          </Col3>
          <Col3>
            <Input
              label="Паспорт: номер"
              value={buyer.passportNumber}
              onChange={(e) =>
                setBuyer({ ...buyer, passportNumber: e.target.value })
              }
            />
          </Col3>
          <Col6>
            <Input
              label="Адрес проживания"
              value={buyer.address}
              onChange={(e) => setBuyer({ ...buyer, address: e.target.value })}
            />
          </Col6>
        </Row>
      </Card>

      <Card title="2) Поручитель (опционально)">
        <Row>
          <Col6>
            <Input
              label="ФИО"
              value={guarantor.fullName}
              onChange={(e) =>
                setGuarantor({ ...guarantor, fullName: e.target.value })
              }
            />
          </Col6>
          <Col3>
            <Input
              label="Телефон"
              value={guarantor.phone}
              onChange={(e) =>
                setGuarantor({ ...guarantor, phone: e.target.value })
              }
            />
          </Col3>
          <Col3>
            <Input
              label="Серия"
              value={guarantor.passportSeries}
              onChange={(e) =>
                setGuarantor({ ...guarantor, passportSeries: e.target.value })
              }
            />
          </Col3>
          <Col3>
            <Input
              label="Номер"
              value={guarantor.passportNumber}
              onChange={(e) =>
                setGuarantor({ ...guarantor, passportNumber: e.target.value })
              }
            />
          </Col3>
        </Row>
      </Card>

      <Card title="3) Товар и условия">
        <Row>
          <Col6>
            <Input
              label="Наименование товара"
              value={product.title}
              onChange={(e) =>
                setProduct({ ...product, title: e.target.value })
              }
            />
          </Col6>
          <Col3>
            <Input
              type="number"
              label="Цена наличными (₽)"
              value={product.cashPrice}
              onChange={(e) =>
                setProduct({
                  ...product,
                  cashPrice: Number(e.target.value || 0),
                })
              }
            />
          </Col3>
          <Col3>
            <Input
              type="number"
              label="Наценка (%)"
              value={Math.round(terms.markupRate * 100)}
              onChange={(e) =>
                setTerms({ ...terms, markupRate: Number(e.target.value) / 100 })
              }
            />
          </Col3>
          <Col3>
            <Input
              type="number"
              label="Аванс (₽)"
              value={terms.downPayment}
              onChange={(e) =>
                setTerms({ ...terms, downPayment: Number(e.target.value || 0) })
              }
            />
          </Col3>
          <Col3>
            <Input
              type="number"
              label="Срок (мес)"
              value={terms.termMonths}
              onChange={(e) =>
                setTerms({ ...terms, termMonths: Number(e.target.value || 1) })
              }
            />
          </Col3>
          <Col3>
            <Input
              type="date"
              label="Дата первой оплаты"
              value={terms.firstDueDate}
              onChange={(e) =>
                setTerms({ ...terms, firstDueDate: e.target.value })
              }
            />
          </Col3>
        </Row>
        <SectionTitle>Итоги</SectionTitle>
        <Row>
          <Col4>
            <Input
              label="Цена продажи (₽)"
              value={rub(schedule.salePrice)}
              readOnly
            />
          </Col4>
          <Col4>
            <Input
              label="Остаток к оплате (₽)"
              value={rub(schedule.principal)}
              readOnly
            />
          </Col4>
        </Row>
      </Card>

      <Card title="4) График платежей">
        <ScheduleTable rows={schedule.rows} />
      </Card>

      <div className={s.grid2}>
        <Card title="Превью расписки">
          <DocumentPreview draft={draft} />
        </Card>
        <Card title="Превью согласия на ПДн">
          <ConsentPreview draft={draft} />
        </Card>
      </div>

      <div className={s.actions}>
        <Button onClick={save} variant="primary">
          Сохранить черновик
        </Button>
        <Button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          К началу
        </Button>
      </div>
    </div>
  );
}
