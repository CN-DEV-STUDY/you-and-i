import { createSlice } from "@reduxjs/toolkit"

type NoticeState = {
  hasUnreadNotice: boolean,
}

const initialState: NoticeState = {
  hasUnreadNotice: false,
}

export const noticeSlice = createSlice({
  name: 'notice',
  initialState,
  reducers: {
    setHasUnreadNotice: (state, action) => {
      const { hasUnreadNotice } = action.payload;
      state.hasUnreadNotice = hasUnreadNotice;
    }
  }
})

export const { setHasUnreadNotice } = noticeSlice.actions;
export default noticeSlice.reducer;