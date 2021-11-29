import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import authReducer from 'reducers/authSlice'
import userReducer from 'reducers/userSlice'
import postReducer from 'reducers/postSlice'

export const store = configureStore({
  reducer: { authReducer, userReducer, postReducer },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
