import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import {
  BASE_URL,
  UPLOAD_AVATAR_URL,
  USER_URL,
  USERS_TAG,
} from '../shared/constants';

import {
  CreateUserReq,
  UpdateUserReq,
  UploadAvatarReq,
  UploadAvatarResp,
  UserData,
  UserListResp,
} from '@/shared/types';
import { commonOnQueryStarted } from '@/shared/utils/api-query-started';
import { setUserList } from '@/redux/redusers/user-slice';

const API_KEY = import.meta.env.VITE_IMGBB_API_KEY;

export const usersApi = createApi({
  reducerPath: 'usersApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  tagTypes: [USERS_TAG],

  endpoints: (builder) => ({
    getUserList: builder.query<UserListResp, string>({
      query: (page) => ({
        url: USER_URL,
        method: 'GET',
        params: { page },
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          await commonOnQueryStarted({ dispatch, queryFulfilled }, true);
          const { data: userListResp } = await queryFulfilled;
          dispatch(setUserList(userListResp.users));
        } catch (e) {
          console.log(e);
        }
      },
      providesTags: [USERS_TAG],
    }),

    createUser: builder.mutation<UserData, CreateUserReq>({
      query: (data) => ({
        url: USER_URL,
        method: 'POST',
        body: data,
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          await commonOnQueryStarted({ dispatch, queryFulfilled }, true);
        } catch (e) {
          console.log(e);
        }
      },
      invalidatesTags: (_, err) => (err ? [] : [USERS_TAG]),
    }),

    editUser: builder.mutation<UserData, UpdateUserReq>({
      query: (data) => ({
        url: `${USER_URL}/${data.id}`,
        method: 'PATCH',
        body: data,
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          await commonOnQueryStarted({ dispatch, queryFulfilled }, true);
        } catch (e) {
          console.log(e);
        }
      },
      invalidatesTags: (_, err) => (err ? [] : [USERS_TAG]),
    }),

    deleteUser: builder.mutation<void, string>({
      query: (id) => ({
        url: `${USER_URL}/${id}`,
        method: 'DELETE',
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          await commonOnQueryStarted({ dispatch, queryFulfilled }, true);
        } catch (e) {
          console.log(e);
        }
      },
      invalidatesTags: (_, err) => (err ? [] : [USERS_TAG]),
    }),

    uploadAvatar: builder.mutation<UploadAvatarResp, UploadAvatarReq>({
      query: (data) => ({
        url: `${UPLOAD_AVATAR_URL}${API_KEY}`,
        method: 'POST',
        body: data,
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        await commonOnQueryStarted({ dispatch, queryFulfilled }, true);
      },
    }),
  }),
});

export const {
  useGetUserListQuery,
  useCreateUserMutation,
  useEditUserMutation,
  useDeleteUserMutation,
  useUploadAvatarMutation,
} = usersApi;
