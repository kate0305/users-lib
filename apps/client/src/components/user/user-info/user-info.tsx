import { Typography } from 'antd';

import styles from './user-info.module.css';

type UserInfoProps = {
  description: string;
  info: string | number;
};

const { Text } = Typography;

export const UserInfo = ({ description, info }: UserInfoProps) => (
  <div className={styles.wrapper}>
    <Text className={styles.description}>{description}</Text>
    <Text ellipsis={true} className={styles.info}>
      {info}
    </Text>
  </div>
);
