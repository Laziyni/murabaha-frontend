import React from 'react';
import s from './Select.module.css';

type Props = React.SelectHTMLAttributes<HTMLSelectElement> & { label?: string };
export default function Select({ label, children, ...rest }: Props) {
  return (
    <label>
      {label && (
        <div
          style={{ fontSize: '.85rem', color: 'var(--muted)', marginBottom: 4 }}
        >
          {label}
        </div>
      )}
      <select className={s.select} {...rest}>
        {children}
      </select>
    </label>
  );
}
