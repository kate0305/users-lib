import { Dispatch, useState } from 'react';
import { Form, Upload, UploadProps } from 'antd';
import { UploadFile } from 'antd/lib/upload/interface';
import { PlusOutlined } from '@ant-design/icons';

import { setAvatarSrc } from '@/redux/redusers/user-slice';
import { useAppDispatch } from '@/redux/hooks';
import { UPLOAD_AVATAR_URL } from '@/shared/constants';

export type UploadInputProps = {
  inputName: string;
  setBtnDisable?: Dispatch<React.SetStateAction<boolean>>;
  imgUrl?: string;
};

export const UploadInput = ({ inputName, imgUrl }: UploadInputProps) => {
  const dispatch = useAppDispatch();

  const initialFile = {
    uid: '0',
    url: imgUrl,
    name: 'user avatar',
  };

  const [fileList, setFileList] = useState<UploadFile[]>(
    imgUrl ? [initialFile] : [],
  );

  const isHasAvatar = !fileList.length;

  const uploadImg: UploadProps['onChange'] = ({ fileList: newFileList }) => {
    setFileList(newFileList);
    const file = newFileList[0];

    if (file && file.status === 'error') {
      const newFile = {
        ...file,
        thumbUrl: '',
      };

      setFileList([newFile]);
    }

    if (file && file.status === 'done') {
      dispatch(setAvatarSrc(file.response));
    }
  };

  return (
    <Form.Item name={inputName} valuePropName="file">
      <Upload
        accept="image/*"
        action={UPLOAD_AVATAR_URL}
        fileList={fileList}
        listType="picture-card"
        maxCount={1}
        onChange={uploadImg}
      >
        {isHasAvatar && (
          <div>
            <PlusOutlined />
            <div style={{ marginTop: 8 }}>Upload avatar</div>
          </div>
        )}
      </Upload>
    </Form.Item>
  );
};
