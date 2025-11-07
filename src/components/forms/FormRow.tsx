import React from 'react';
import s from './FormRow.module.css';
export const Row: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className={s.row}>{children}</div>
);
export const Col3: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className={s.col3}>{children}</div>
);
export const Col4: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className={s.col4}>{children}</div>
);
export const Col6: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className={s.col6}>{children}</div>
);
export const Col12: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => <div className={s.col12}>{children}</div>;
export const SectionTitle: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => <div className={s.section}>{children}</div>;
