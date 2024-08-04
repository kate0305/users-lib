import { UploadFile } from 'antd';
import { UploadChangeParam } from 'antd/lib/upload';

export const getAvatarSrc = (
  imgData: string | UploadChangeParam<UploadFile>,
) => {
  if (typeof imgData === 'string') {
    return imgData;
  }

  if (imgData.file.status === 'removed') {
    return '';
  }

  return imgData.file.response.url;
};
