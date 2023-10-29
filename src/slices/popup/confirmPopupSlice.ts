import { createSlice } from "@reduxjs/toolkit"

export type ConfirmPopupState = {
  showConfirmPopup: boolean,
  title: string,
  content?: string,
  onClose?: () => void,
  onConfirm?: () => void,
}

const initialState: ConfirmPopupState = {
  showConfirmPopup: false,
  title: '',
  content: '',
  onClose: () => {},
  onConfirm: () => {},
}

export const confirmPopupSlice = createSlice({
  name: 'confirmPopup',
  initialState,
  reducers: {
    openConfirmPopup: (state, action) => {
      const { title, content, onClose, onConfirm } = action.payload;
      state.showConfirmPopup = true;
      state.title = title;
      state.content = content;
      state.onClose = onClose;
      state.onConfirm = onConfirm;
    },
    closeConfirmPopup: (state) => {
      state.showConfirmPopup = false;
    }
  }
})

export const { openConfirmPopup, closeConfirmPopup } = confirmPopupSlice.actions;
export default confirmPopupSlice.reducer;