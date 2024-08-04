import { FormItemProps, Input, InputNumber, Select } from 'antd';

import { GENDER } from '@/shared/constants';

type SignUpFormFild = FormItemProps & {
  id: string;
};

export const formFildsData: SignUpFormFild[] = [
  {
    id: '1',
    name: 'firstName',
    label: 'First Name',
    required: true,
    rules: [{ required: true, message: '' }],
    children: <Input placeholder="First Name" autoComplete="given-name" />,
  },
  {
    id: '2',
    name: 'lastName',
    label: 'Last Name',
    required: true,
    rules: [{ required: true, message: '' }],
    children: <Input placeholder="Last Name" autoComplete="family-name" />,
  },
  {
    id: '3',
    name: 'gender',
    label: 'Choose your gender',
    required: true,
    rules: [{ required: true, message: '' }],
    children: <Select placeholder="Select a gender" options={GENDER} />,
  },
  {
    id: '4',
    name: 'height',
    label: 'Enter your height',
    required: true,
    rules: [{ required: true, message: '' }],
    children: <InputNumber placeholder="000" addonAfter="сm" keyboard={true} />,
  },
  {
    id: '5',
    name: 'weight',
    label: 'Enter your weight',
    required: true,
    rules: [{ required: true, message: '' }],
    children: <InputNumber placeholder="00" addonAfter="kg" keyboard={true} />,
  },
  {
    id: '6',
    name: 'residence',
    label: 'Enter your country',
    required: true,
    rules: [{ required: true, message: '' }],
    children: <Input placeholder="Country" autoComplete="country-name" />,
  },
];
