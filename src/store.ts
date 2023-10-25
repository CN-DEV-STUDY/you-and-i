import { configureStore } from '@reduxjs/toolkit'
import loginReducer from '@/slices/user/loginSlice'
import alertPopupReducer from '@/slices/popup/alertPopupSlice'

export const store = configureStore({
    reducer: {
        login: loginReducer,
        alertPopup: alertPopupReducer,
    },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch