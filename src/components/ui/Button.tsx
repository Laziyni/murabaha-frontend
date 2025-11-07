import React from 'react';
import cx from 'classnames';
import s from './Button.module.css';

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'default' | 'primary';
  block?: boolean;
};
export default function Button({
  variant = 'default',
  block,
  className,
  ...rest
}: Props) {
  return (
    <button
      {...rest}
      className={cx(
        s.btn,
        variant === 'primary' && s.primary,
        block && s.block,
        className
      )}
    />
  );
}
