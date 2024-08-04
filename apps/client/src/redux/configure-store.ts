import { configureStore } from '@reduxjs/toolkit';
import { listenerMiddleware } from './listener-middleware';
import { usersApi } from '@/services/users-service';
import { appReduser } from './redusers/app-slice';
import { usersReduser } from './redusers/user-slice';

export const store = configureStore({
  reducer: {
    appReduser,
    usersReduser,
    [usersApi.reducerPath]: usersApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      listenerMiddleware.middleware,
      usersApi.middleware,
    ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
