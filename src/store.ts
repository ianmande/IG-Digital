import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import authReducer from 'reducers/authSlice'
import userReducer from 'reducers/userSlice'

export const store = configureStore({
  reducer: { authReducer, userReducer },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
