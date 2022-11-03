import React from 'react';

type ButtonType = {
  children: string
}

export const Button: React.FC<ButtonType> = ({children}) => {
  return (
    <button>
      {children}
    </button>
  );
};
