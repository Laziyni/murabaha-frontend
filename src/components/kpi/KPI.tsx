import React from 'react';
import s from './KPI.module.css';

export default function KPI() {
  const items = [
    { title: 'Выдано за месяц', value: '3 420 000 ₽' },
    { title: 'Активные сделки', value: '128' },
    { title: 'Просрочка 0–30', value: '6.4%' },
    { title: 'Погашено вовремя', value: '92%' },
  ];
  return (
    <div className={s.grid}>
      {items.map((it, i) => (
        <div className={s.item} key={i}>
          <div className={s.title}>{it.title}</div>
          <div className={s.value}>{it.value}</div>
        </div>
      ))}
    </div>
  );
}
