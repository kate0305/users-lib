import { Link } from 'react-router-dom';
import { Button, Result } from 'antd';
import { Paths } from '@/shared/types';

import styles from './not-found-page.module.css';

export const NotFoundPage = () => (
  <main className={styles.wrapper}>
    <Result
      status="404"
      title="Page Not Found"
      subTitle="Sorry, the page could not be found, it may have&nbsp; been removed or moved."
      extra={
        <Link to={Paths.HOME}>
          <Button type="primary">Go To Main Page</Button>
        </Link>
      }
      className={styles.result}
    />
  </main>
);
