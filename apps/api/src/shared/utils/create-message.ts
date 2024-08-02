import { REQUIRED_FIELD } from '../constants';

export const createMessage = (fieldName: string) => {
  return {
    message: `${fieldName} ${REQUIRED_FIELD}`,
  };
};
