import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { Button, Form } from 'antd';
import { selectAvatarSrc, selectUserList } from '@/redux/redusers/user-slice';
import { useAppSelector } from '@/redux/hooks';
import {
  useDeleteUserMutation,
  useEditUserMutation,
} from '@/services/users-service';

import { openNotification } from '@/shared/utils/open-notification';
import { Paths, UpdateUserReq } from '@/shared/types';

import { UserForm } from '../user-form/index.js';

import styles from './edit-user-form.module.css';

export const EditUserForm = () => {
  const navigate = useNavigate();
  const { id: userId } = useParams();
  const userData = useAppSelector(selectUserList)?.find(
    ({ id }) => id === userId,
  );

  const avatarSrc = useAppSelector(selectAvatarSrc);

  const [form] = Form.useForm<UpdateUserReq>();
  const [editUser, { isError, isSuccess }] = useEditUserMutation();
  const [deleteUser] = useDeleteUserMutation();

  const onSubmit = async (values: UpdateUserReq) => {
    const data = {
      ...values,
      id: userId,
      photo: avatarSrc || undefined,
    };

    editUser(data);
  };

  const handleDeleteUser = async () => {
    await deleteUser(userId ?? '');
    navigate(`/${Paths.USERS}`);
  };

  useEffect(() => {
    if (isSuccess) {
      openNotification('success', 'User updated successfully');
    }

    if (isError) {
      openNotification('error', 'An error has occurred');
    }
  }, [isError, isSuccess]);

  return (
    <UserForm
      name="edit-user-form"
      form={form}
      initialValues={userData}
      onFinish={onSubmit}
      imgUrl={userData?.photo ?? ''}
      btnText="Update"
      extraBtn={
        <Button
          type="primary"
          danger
          size="large"
          onClick={handleDeleteUser}
          className={styles.btn}
        >
          Delete
        </Button>
      }
    />
  );
};
