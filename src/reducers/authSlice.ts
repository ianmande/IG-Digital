import { createEntityAdapter, createSlice } from '@reduxjs/toolkit'
import { localKey } from 'config/constants'
import { IAction } from 'types/app'

import { Auth } from 'types/auth'
import { setItemLocal } from 'utils'

const PREFIX = 'auth'
const authAdapter = createEntityAdapter<Auth>({})

const initialState: Auth = {
  isAuthenticated: false,
  user: {
    name: '',
    surname: '',
    username: '',
  },
  loading: false,
  errorMessage: null,
  serverErrors: false,
  success: false,
}

export const authSlice = createSlice({
  name: PREFIX,
  initialState: authAdapter.getInitialState(initialState),
  reducers: {
    authenticated(state, action: IAction) {
      state.isAuthenticated = true
      setItemLocal(localKey, action.payload)
    },
    expiredAuth(state) {
      state.isAuthenticated = false
    },
  },
})

//Actions
export const { expiredAuth } = authSlice.actions

// Reducer
export default authSlice.reducer
