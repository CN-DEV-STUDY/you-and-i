import { createSlice } from "@reduxjs/toolkit"

export type AlertPopupState = {
  showAlertPopup: boolean,
  title: string,
  content?: string,
  onClose?: () => void,
}

const initialState: AlertPopupState = {
  showAlertPopup: false,
  title: '',
  content: '',
  onClose: () => {},
}

export const alertPopupSlice = createSlice({
  name: 'alertPopup',
  initialState,
  reducers: {
    openAlertPopup: (state, action) => {
      const { title, content, onClose } = action.payload;
      state.showAlertPopup = true;
      state.title = title;
      state.content = content;
      state.onClose = onClose;
    },
    closeAlertPopup: (state) => {
      state.showAlertPopup = false;
    }
  }
});

export const { openAlertPopup, closeAlertPopup } = alertPopupSlice.actions;
export default alertPopupSlice.reducer;