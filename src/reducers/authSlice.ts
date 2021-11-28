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
import { removeItemLocal, searchItemLocal, setItemLocal } from 'utils'
import { createToken, decodeToken } from 'utils/jwt'

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
      const token = await createToken({ username: isUser.username })

      setItemLocal(localKey, {
        user: isUser,
        token,
      })

      return isUser
    } else {
      throw Error('El usuario no existe')
    }
  }
)

/**
 * Cerrar sesion
 */
export const fetchAuthLogout = createAsyncThunk(`${PREFIX}/logout`, () =>
  removeItemLocal(localKey)
)

/**
 * Verificar si el usuario sigue
 * logeado cuando se recarga el navegador
 */
export const browserReloadAuth = createAsyncThunk(
  `${PREFIX}/browserReloadAuth`,
  (params, { dispatch }) => {
    const access_app = searchItemLocal(localKey)

    const token: any = decodeToken(access_app?.token)

    if (token) {
      return access_app.user
    } else {
      throw Error('No autenticado, por favor iniciar sesion')
    }
  }
)

export const authSlice = createSlice({
  name: PREFIX,
  initialState: authAdapter.getInitialState(initialState),
  reducers: {
    clearErrors(state) {
      state.serverErrors = false
    },
    authenticated(state) {
      state.isAuthenticated = true
    },
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
      state.isAuthenticated = true
      state.user = action.payload
    })
    build.addCase(login.rejected, (state) => {
      state.isLoading = initialState.isLoading
      state.serverErrors = true
    })
    build.addCase(fetchAuthLogout.fulfilled, (state) => {
      state.isLoading = false
      state.isAuthenticated = false
      state.user = initialState.user
    })
    build.addCase(browserReloadAuth.fulfilled, (state, action: IAction) => {
      state.isAuthenticated = true
      state.user = action.payload
    })
    build.addCase(browserReloadAuth.rejected, (state) => {
      state.isAuthenticated = false
      state.user = initialState.user
    })
  },
})

//Actions
export const { expiredAuth, authenticated, clearErrors } = authSlice.actions

// Reducer
export default authSlice.reducer
