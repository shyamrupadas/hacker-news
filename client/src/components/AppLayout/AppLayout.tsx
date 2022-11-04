import React, { ReactNode } from 'react';

import s from './AppLayout.module.css';

type AppLayoutProps = {
  children: ReactNode
}

export const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  return (
    <div className={s.container}>
      <main className={s.main}>
        {children}
      </main>
      <footer className={s.footer}>
        &copy; <a href="https://github.com/shyamrupadas">shyamrupadas</a> 2022
      </footer>
    </div>
  );
};
