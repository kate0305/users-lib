import { Link } from 'react-router-dom';
import { Button, Layout, Grid } from 'antd';
import { UserAddOutlined } from '@ant-design/icons';

import { Paths } from '@/shared/types';

import styles from './header.module.css';

const { Header } = Layout;
const { useBreakpoint } = Grid;

export const AppHeader = () => {
  const screens = useBreakpoint();

  return (
    <Header className={styles.header}>
      <div className={styles.wrapper}>
        <Link to={Paths.HOME} className={styles.app_name}>
          Users Lib
        </Link>
        <Link to={Paths.CREATE_USER}>
          <Button type="primary" icon={<UserAddOutlined />}>
            {!screens.xs && 'Add New User'}
          </Button>
        </Link>
      </div>
    </Header>
  );
};
