import { ReactNode } from 'react';
import styles from './page-wrapper.module.css';

type PageWrapperProps = {
  title?: ReactNode;
  children?: ReactNode;
};

export const PageWrapper = ({ title, children }: PageWrapperProps) => (
  <main className={styles.wrapper}>
    {title}
    {children}
  </main>
);
