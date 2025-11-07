import React from 'react';
import s from './Input.module.css';

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  help?: string;
};
export default function Input({ label, help, ...rest }: Props) {
  return (
    <label>
      {label && <span className={s.label}>{label}</span>}
      <input {...rest} className={s.input} />
      {help && <div className={s.help}>{help}</div>}
    </label>
  );
}
