import React from 'react';
import s from './Card.module.css';

type Props = { title?: string; children: React.ReactNode };
export default function Card({ title, children }: Props) {
  return (
    <div className={s.card}>
      {title && <div className={s.title}>{title}</div>}
      {children}
    </div>
  );
}
