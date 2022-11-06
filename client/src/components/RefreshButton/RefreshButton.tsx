import React, { MouseEventHandler, useState } from 'react';
import { RefreshIcon } from '../RefreshIcon';

import s from './RefreshButton.module.css';

type ButtonType = {
  children: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
  pending?: boolean;
};

export const RefreshButton: React.FC<ButtonType> = ({ children, onClick, pending }) => {
  const [isHover, setIsHover] = useState<boolean>(false);

  const handleHoverOn = () => {
    setIsHover(true);
  };

  const handleHoverOff = () => {
    setIsHover(false);
  };

  return (
    <button
      className={s.button}
      onClick={onClick}
      onMouseEnter={handleHoverOn}
      onMouseLeave={handleHoverOff}>
      <RefreshIcon rotate={pending} hover={isHover} />
      {children}
    </button>
  );
};
