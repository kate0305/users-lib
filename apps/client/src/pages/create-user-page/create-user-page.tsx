import { PageWrapper } from '@/components/page-container';
import { PageTitle } from '@/components/typography/page-title';
import { CreateUserForm } from '@/components/form/create-user-form';

export const CreateUserPage = () => (
  <PageWrapper>
    <PageTitle>Create New User</PageTitle>
    <CreateUserForm />
  </PageWrapper>
);
