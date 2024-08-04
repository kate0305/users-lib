import { RouterProvider } from 'react-router-dom';
import { router } from '../routes/index.js';

export const App = () => {
  return <RouterProvider router={router} />;
};
