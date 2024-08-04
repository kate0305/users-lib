import { Button, Card, Col, Image, Typography } from 'antd';
import { Link } from 'react-router-dom';

import { createDataForRender } from '@/shared/utils/create-data-for-render';
import { NO_AVATAR_URL, USER_DESCRIPTION } from '@/shared/constants';
import { UserData } from '@/shared/types';

import { UserInfo } from '../user-info';

import styles from './user-card.module.css';

type UserCardProps = {
  user: UserData;
};

const { Text, Title } = Typography;

export const UserCard = ({ user }: UserCardProps) => {
  const { id, firstName, lastName, height, weight, gender, residence, photo } =
    user;

  const userInfo = [height, weight, gender, residence];
  const userInfoForRender = createDataForRender(USER_DESCRIPTION, userInfo);

  return (
    <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 12 }} lg={{ span: 8 }}>
      <Link
        to={`${id}`}
        style={{ position: 'relative' }}
        className={styles.link}
      >
        <Card hoverable className={styles.card}>
          <Image
            alt="avatar"
            src={photo ?? NO_AVATAR_URL}
            fallback={NO_AVATAR_URL}
            preview={false}
            className={styles.img}
          />

          <div className={styles.info}>
            <Title level={4} className={styles.title}>
              <Text className={styles.name} ellipsis={true}>
                {firstName}
              </Text>
              <Text className={styles.name} ellipsis={true}>
                {lastName}
              </Text>
            </Title>
            <div className={styles.description}>
              {userInfoForRender.map(({ id, description, info }) => (
                <UserInfo key={id} description={description} info={info} />
              ))}
            </div>
          </div>
        </Card>
        <div className={styles.hover}>
          <Button type="primary" size="large" className={styles.btn}>
            More
          </Button>
        </div>
      </Link>
    </Col>
  );
};
