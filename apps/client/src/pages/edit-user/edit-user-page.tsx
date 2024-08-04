import { PageWrapper } from '@/components/page-container';
import { PageTitle } from '@/components/typography/page-title';
import { EditUserForm } from '@/components/form/edit-user-form';

export const EditUserPage = () => (
  <PageWrapper>
    <PageTitle>Edit New User</PageTitle>
    <EditUserForm />
  </PageWrapper>
);
