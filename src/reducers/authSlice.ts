//Vendors
import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from '@reduxjs/toolkit'

// Constants
import { localKey } from 'config/constants'
import { RootState } from 'store'

// Types
import { ThunkAPI } from 'types/api'
import { IAction } from 'types/app'
import { Auth } from 'types/auth'

// Utils
import { setItemLocal } from 'utils'
import { createToken } from 'utils/jwt'

const PREFIX = 'auth'
const authAdapter = createEntityAdapter<Auth>({})

const initialState: Auth = {
  isAuthenticated: false,
  user: {
    name: '',
    surname: '',
    username: '',
  },
  isLoading: false,
  errorMessage: null,
  serverErrors: false,
  success: false,
}

/**
 * Iniciar sesion
 * @param username: string
 */
export const login = createAsyncThunk(
  `${PREFIX}/INICIAR-SESION`,
  async (username: string, { getState }: ThunkAPI) => {
    const {
      userReducer: { users },
    }: RootState = getState()

    const isUser = users.find((user) => user.username === username)

    if (isUser) {
      const token = await createToken({ username: isUser.surname })

      setItemLocal(localKey, {
        ...isUser,
        token,
      })

      return isUser
    } else {
      throw Error('El usuario no existe')
    }
  }
)

export const authSlice = createSlice({
  name: PREFIX,
  initialState: authAdapter.getInitialState(initialState),
  reducers: {
    expiredAuth(state) {
      state.isAuthenticated = false
    },
  },
  extraReducers: (build) => {
    build.addCase(login.pending, (state) => {
      state.isLoading = true
    })
    build.addCase(login.fulfilled, (state, action: IAction) => {
      state.isLoading = initialState.isLoading

      state.user = action.payload
    })
    build.addCase(login.rejected, (state) => {
      state.isLoading = initialState.isLoading
      state.serverErrors = true
    })
  },
})

//Actions
export const { expiredAuth } = authSlice.actions

// Reducer
export default authSlice.reducer
