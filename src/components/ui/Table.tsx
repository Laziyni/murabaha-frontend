import React from 'react';
import s from './Table.module.css';

type Col = { key: string; title: string; align?: 'left' | 'right' };
export default function Table<T extends Record<string, any>>({
  columns,
  rows,
}: {
  columns: Col[];
  rows: T[];
}) {
  return (
    <table className={s.table}>
      <thead>
        <tr>
          {columns.map((c) => (
            <th
              key={c.key}
              className={c.align === 'right' ? s.right : undefined}
            >
              {c.title}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((r, i) => (
          <tr key={i}>
            {columns.map((c) => (
              <td
                key={c.key}
                className={c.align === 'right' ? s.right : undefined}
              >
                {r[c.key]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
