import React, { MouseEventHandler } from 'react';

type ButtonType = {
  children: string
  onClick: MouseEventHandler<HTMLButtonElement>
}

export const Button: React.FC<ButtonType> = ({children, onClick}) => {
  return (
    <button onClick={onClick}>
      {children}
    </button>
  );
};
