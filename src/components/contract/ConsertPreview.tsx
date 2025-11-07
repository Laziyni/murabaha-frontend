import React from 'react';
import { DealDraft } from '@/types/contract';
import s from './ConsertPreview.module.css';
import { fmtDate } from '@/utils/date';

export default function ConsentPreview({ draft }: { draft: DealDraft }) {
  return (
    <div className={s.paper}>
      <div className={s.h}>Согласие на обработку персональных данных</div>
      <div className={s.sub}>
        {draft.terms.city}, {fmtDate(draft.terms.contractDate)}
      </div>
      <p>
        Я, {draft.buyer.fullName}, паспорт: серия{' '}
        {draft.buyer.passportSeries || '____'} №{' '}
        {draft.buyer.passportNumber || '______'}, даю согласие{' '}
        {draft.seller.fullName} на обработку моих персональных данных в целях
        оформления сделки купли‑продажи (murabaha), ведения учёта и
        коммуникаций. Срок действия — до отзыва. Настоящее согласие может быть
        отозвано по письменному заявлению.
      </p>
      <p>Подпись покупателя: _____________ / {draft.buyer.fullName}</p>
      <p>
        Поручитель (при наличии): _____________ /{' '}
        {draft.guarantor?.fullName || '—'}
      </p>
    </div>
  );
}
