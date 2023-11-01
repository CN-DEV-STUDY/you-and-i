import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit'
import loginReducer from '@/slices/user/loginSlice'
import alertPopupReducer from '@/slices/popup/alertPopupSlice'
import confirmPopupReducer from '@/slices/popup/confirmPopupSlice'
import noticeReducer from '@/slices/notice/noticeSlice'

export const store = configureStore({
    reducer: {
        login: loginReducer,
        alertPopup: alertPopupReducer,
        confirmPopup: confirmPopupReducer,
        notice: noticeReducer,
    },
    middleware: getDefaultMiddleware({
        serializableCheck: false,
    }),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch