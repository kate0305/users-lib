import { ReactNode } from 'react';
import { Typography } from 'antd';
import { TitleProps } from 'antd/lib/typography/Title';

import styles from './page-title.module.css';

type PageTitleProps = TitleProps & {
  children: ReactNode;
};

const { Title } = Typography;

export const PageTitle = ({ children, level }: PageTitleProps) => (
  <Title level={level} className={styles.title}>
    {children}
  </Title>
);
