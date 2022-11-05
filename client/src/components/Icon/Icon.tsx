import React from 'react';

import s from './Icon.module.css'

type IconProps = {
  rotate?: boolean
}

export const Icon: React.FC<IconProps> = ({ rotate }) => {
  return (
    <span className={s.wrapper}>
      <img className={s.icon + ' ' + (rotate && s.rotate)} src="../../../public/refresh.svg" alt="" />
    </span>
  );
};
