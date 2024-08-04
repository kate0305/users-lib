import { Form } from 'antd';
import { FormItemProps } from 'antd/lib/form';

export const FormItem = ({
  name,
  rules,
  help,
  valuePropName,
  noStyle,
  children,
  label,
  required,
  className,
}: FormItemProps) => (
  <Form.Item
    name={name}
    label={label}
    rules={rules}
    help={help}
    valuePropName={valuePropName}
    noStyle={noStyle}
    required={required}
    className={className}
  >
    {children}
  </Form.Item>
);
