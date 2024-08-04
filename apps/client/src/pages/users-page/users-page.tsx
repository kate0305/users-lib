import { PageWrapper } from '@/components/page-container';
import { PageSpin } from '@/components/spin';
import { UserList } from '@/components/user/user-list';

import { useAppSelector } from '@/redux/hooks';
import { selectIsLoading } from '@/redux/redusers/app-slice';

export const UsersPage = () => {
  const isLoading = useAppSelector(selectIsLoading);
  return isLoading ? (
    <PageSpin />
  ) : (
    <PageWrapper>
      <UserList />
    </PageWrapper>
  );
};
