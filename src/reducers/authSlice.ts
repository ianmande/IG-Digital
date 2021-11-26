import { createEntityAdapter, createSlice } from '@reduxjs/toolkit'

import { Auth } from 'types/auth'

const PREFIX = 'auth'
const authAdapter = createEntityAdapter<Auth>({})

const initialState: Auth = {
  isAuthenticated: false,
  user: {
    email: '',
    profile_image: '',
    full_name: '',
  },
  loading: false,
  errorMessage: null,
  serverErrors: false,
  success: false,
}

export const authSlice = createSlice({
  name: PREFIX,
  initialState: authAdapter.getInitialState(initialState),
  reducers: {},
})

// Reducer
export default authSlice.reducer
