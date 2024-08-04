import { Alert, AlertProps } from 'antd';

import styles from './alert.module.css';

export type AppAlertProps = AlertProps;

export const AppAlert = ({ message, type }: AppAlertProps) => (
  <Alert
    message={message}
    type={type}
    showIcon={true}
    closable={true}
    className={styles.alert}
  />
);
