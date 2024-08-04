import { AppLayout } from '@/components/layout';
import { Paths } from '@/shared/types';
import { createBrowserRouter, redirect } from 'react-router-dom';
import { NotFoundPage } from '../not-found-page';
import { UsersPage } from '../users-page';
import { CreateUserPage } from '../create-user-page';
import { EditUserPage } from '../edit-user';

export const router = createBrowserRouter([
  {
    path: Paths.HOME,
    element: <AppLayout />,
    children: [
      {
        index: true,
        loader: async () => redirect(Paths.USERS),
      },
      {
        path: Paths.USERS,
        element: <UsersPage />,
      },
      {
        path: `${Paths.USERS}/:id`,
        element: <EditUserPage />,
      },
      {
        path: Paths.CREATE_USER,
        element: <CreateUserPage />,
      },
      {
        path: Paths.NOT_FOUND,
        element: <NotFoundPage />,
      },
    ],
  },
]);
