import { createSlice } from '@reduxjs/toolkit'

type LoginState = {
  isLoggedIn: boolean,
}

const initialState: LoginState = {
  isLoggedIn: false,
}

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    login: (state) => {
      state.isLoggedIn = true;
    },
    logout: (state) => {
      state.isLoggedIn = false;
    }
  }
})

export const { login, logout } = loginSlice.actions;
export default loginSlice.reducer;