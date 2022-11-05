import React, { MouseEventHandler } from 'react';
import { Icon } from '../Icon';

import s from './Button.module.css';

type ButtonType = {
  children: string
  onClick: MouseEventHandler<HTMLButtonElement>
  pending?: boolean
}

export const Button: React.FC<ButtonType> = ({ children, onClick, pending }) => {
  return (
    <button className={s.button} onClick={onClick}>
     <Icon rotate={pending} />
      {children}
    </button>
  );
};
