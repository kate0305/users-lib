import { useState } from 'react';
import { Pagination, Row } from 'antd';

import { useGetUserListQuery } from '@/services/users-service';
import { UserCard } from '../user-card';

import styles from './user-list.module.css';

export const UserList = () => {
  const [page, setPage] = useState('1');
  const { data: usersData } = useGetUserListQuery(page);

  const handleChangePage = (page: number) => setPage(`${page}`);

  return (
    <div className={styles.wrapper}>
      <Row
        gutter={[
          { xs: 8, sm: 16 },
          { xs: 8, sm: 16 },
        ]}
      >
        {usersData?.users?.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </Row>
      <Pagination
        defaultCurrent={1}
        total={usersData?.totalUsers}
        onChange={handleChangePage}
        className={styles.pagination}
      />
    </div>
  );
};
