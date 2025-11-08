import React from 'react';
import { DealDraft } from '@/types/contract';
import s from './DocumentPreview.module.css';
import Button from '@/components/ui/Button';
import { rub } from '@/utils/money';
import { fmtDate } from '@/utils/date';
import ScheduleTable from './SheduleTable';

export default function DocumentPreview({ draft }: { draft: DealDraft }) {
  const print = () => window.print();
  return (
    <div className={s.paper}>
      <div className={s.h}>
        Расписка о получении (купле‑продаже) товара № {draft.terms.contractNo}
      </div>
      <div className={s.sub}>
        {draft.terms.city}, {fmtDate(draft.terms.contractDate)}
      </div>

      <div className={s.line}>
        Я, <b>{draft.buyer.fullName}</b>, дата рождения:{' '}
        {draft.buyer.birthDate || '—'}, паспорт: серия{' '}
        {draft.buyer.passportSeries || '____'} №{' '}
        {draft.buyer.passportNumber || '______'}, телефон:{' '}
        {draft.buyer.phone || '—'}, адрес: {draft.buyer.address || '—'}, в
        дальнейшем — «Покупатель», получил(а) от <b>{draft.seller.fullName}</b>,
        в дальнейшем — «Продавец», следующий товар:
      </div>

      <div className={s.box}>
        <b>Наименование товара:</b> {draft.product.title}.{' '}
        <b>Цена наличными:</b> {rub(draft.product.cashPrice)} ₽.{' '}
        <b>Цена продажи по договору:</b> {rub(draft.salePrice)} ₽. <b>Аванс:</b>{' '}
        {rub(draft.terms.downPayment)} ₽. <b>Остаток к оплате:</b>{' '}
        {rub(draft.principal)} ₽.
      </div>

      <div className={s.line}>
        Обязуюсь внести остаток в сумме {rub(draft.principal)} ₽ до{' '}
        {fmtDate(draft.terms.firstDueDate)} + {draft.terms.termMonths - 1}{' '}
        последующих платежей согласно графику ниже. Оплата производится
        наличными, безналичным переводом на реквизиты Продавца или через
        эквайринг. Оплата без чека не принимается к сведению.
      </div>

      <div className={s.line}>
        <b>График платежей</b>
      </div>
      <ScheduleTable rows={draft.schedule} />

      <div className={s.line}>
        Поручитель отвечает солидарно с Покупателем:{' '}
        <b>{draft.guarantor?.fullName || '—'}</b>, дата рождения:{' '}
        {draft.guarantor?.birthDate || '—'}, паспорт: серия{' '}
        {draft.guarantor?.passportSeries || '____'} №{' '}
        {draft.guarantor?.passportNumber || '______'}, телефон:{' '}
        {draft.guarantor?.phone || '—'}, адрес:{' '}
        {draft.guarantor?.address || '—'}.
      </div>

      <div className={s.signs}>
        <div>Продавец: __________________ / {draft.seller.fullName}</div>
        <div>Покупатель: ________________ / {draft.buyer.fullName}</div>
        <div>
          Поручитель: _______________ / {draft.guarantor?.fullName || '—'}
        </div>
      </div>
      <div className={s.print}>
        <Button onClick={print}>Печать</Button>
      </div>
    </div>
  );
}
