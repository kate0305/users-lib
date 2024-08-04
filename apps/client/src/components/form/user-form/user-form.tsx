import { ReactNode } from 'react';

import { Button, Form, FormProps } from 'antd';

import { UploadInput } from '@/components/input/upload-input';

import { formFildsData } from './form-data';
import { FormItem } from '../form-item/index.js';

import styles from './user-form.module.css';

type UserFormProps = FormProps & {
  btnText: string;
  imgUrl?: string;
  extraBtn?: ReactNode;
};

export const UserForm = ({
  name,
  form,
  initialValues,
  onFinish,
  btnText,
  imgUrl,
  extraBtn,
}: UserFormProps) => {
  return (
    <Form
      name={name}
      className={styles.form}
      form={form}
      initialValues={initialValues}
      onFinish={onFinish}
    >
      {formFildsData.map(
        ({ id, name, rules, help, required, label, children }) => (
          <FormItem
            key={id}
            name={name}
            label={label}
            rules={rules}
            help={help}
            required={required}
          >
            {children}
          </FormItem>
        ),
      )}

      <UploadInput inputName="photo" imgUrl={imgUrl} />

      <div>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            size="large"
            className={styles.btn}
          >
            {btnText}
          </Button>
        </Form.Item>
        {extraBtn}
      </div>
    </Form>
  );
};
