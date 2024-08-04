import { RootState } from '@/redux/configure-store';

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { UserData } from '@/shared/types';

type UserReducerState = {
  userList: UserData[] | null;
  avatarSrc: string;
};

const initialState: UserReducerState = {
  userList: null,
  avatarSrc: '',
};

export const usersSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserList(state, action: PayloadAction<UserData[] | null>) {
      state.userList = action.payload;
    },
    setAvatarSrc(state, action: PayloadAction<string>) {
      state.avatarSrc = action.payload;
    },
  },
});

export const { setUserList, setAvatarSrc } = usersSlice.actions;
export const usersReduser = usersSlice.reducer;

export const selectUserList = (state: RootState) => state.usersReduser.userList;
export const selectAvatarSrc = (state: RootState) =>
  state.usersReduser.avatarSrc;
