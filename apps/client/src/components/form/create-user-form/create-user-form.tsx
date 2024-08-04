import { useEffect } from 'react';
import { Form } from 'antd';

import { useCreateUserMutation } from '@/services/users-service';
import { selectAvatarSrc } from '@/redux/redusers/user-slice';
import { useAppSelector } from '@/redux/hooks';

import { CreateUserReq } from '@/shared/types';
import { openNotification } from '@/shared/utils/open-notification';

import { UserForm } from '../user-form';

export const CreateUserForm = () => {
  const avatarSrc = useAppSelector(selectAvatarSrc);
  const [form] = Form.useForm<CreateUserReq>();

  const [createUser, { isError, isSuccess }] = useCreateUserMutation();

  const onSubmit = async (values: CreateUserReq) => {
    const data = {
      ...values,
      photo: avatarSrc,
    };

    createUser(data);
  };

  useEffect(() => {
    if (isSuccess) {
      openNotification('success', 'User created successfully');
      form.resetFields();
    }

    if (isError) {
      openNotification('error', 'An error has occurred');
    }
  }, [form, isError, isSuccess]);

  return (
    <UserForm
      name="create-user-form"
      form={form}
      onFinish={onSubmit}
      btnText="Create"
    />
  );
};
