import { Outlet } from 'react-router-dom';
import { Layout } from 'antd';

import { useGetUserListQuery } from '@/services/users-service';
import { AppHeader } from '@/components/header';

import styles from './app-layout.module.css';

export const AppLayout = () => {
  useGetUserListQuery('1');

  return (
    <Layout className={styles.wrapper}>
      <AppHeader />
      <Outlet />
    </Layout>
  );
};
