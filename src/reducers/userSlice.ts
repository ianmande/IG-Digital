// Vendors
import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from '@reduxjs/toolkit'
import { RootState } from 'store'

// Types
import { IAction, User } from 'types/app'
import { ServerStatus } from 'types/serverStatus'
import { ThunkAPI } from 'types/api'

// Store
import { searchItemLocal, setItemLocal } from 'utils'
import { createToken } from 'utils/jwt'

// Constants
import { localKey, localKeyUsers } from 'config/constants'
import { authenticated } from './authSlice'

interface IUsers extends ServerStatus {
  users: User[]
}

const PREFIX = 'users'

const userAdapter = createEntityAdapter<IUsers>({})

const initialState: IUsers = {
  users: [
    {
      username: 'ianmdz',
      name: 'ian',
      surname: 'mande',
    },
  ],
  isLoading: false,
  errorMessage: null,
  serverErrors: false,
  success: false,
}

/**
 * Crear cuenta
 * @param user: User
 */

export const createAccount = createAsyncThunk(
  `${PREFIX}/CREAR-CUENTA`,
  async (user: User, { getState, dispatch }: ThunkAPI) => {
    const {
      userReducer: { users },
    }: RootState = getState()

    const exitsUser = users.some(({ username }) => username === user.username)

    if (!exitsUser) {
      const token = await createToken({ username: user.username })

      setItemLocal(localKey, {
        user,
        token,
      })

      dispatch(authenticated())

      return user
    } else {
      throw Error('El usuario ya existe')
    }
  }
)

/**
 * Obtener los usuarios guardados en local store y guardarlos en el reducer
 *
 */
export const browserReloadUsers = createAsyncThunk(
  `${PREFIX}/browserReloadUsers`,
  () => {
    const users = searchItemLocal(localKeyUsers)

    if (users) {
      return users
    } else {
      throw Error('No hay usuario guardados')
    }
  }
)

export const userSlice = createSlice({
  name: PREFIX,
  initialState: userAdapter.getInitialState(initialState),
  reducers: {},
  extraReducers: (build) => {
    build.addCase(createAccount.pending, (state) => {
      state.isLoading = true
    })
    build.addCase(createAccount.fulfilled, (state, action: IAction) => {
      state.isLoading = initialState.isLoading
      state.users = [...state.users, action.payload]

      setItemLocal(localKeyUsers, state.users)
    })
    build.addCase(createAccount.rejected, (state) => {
      state.isLoading = initialState.isLoading
      state.serverErrors = true
    })
    build.addCase(browserReloadUsers.fulfilled, (state, action: IAction) => {
      state.users = action.payload
    })
  },
})

//Actions

// Reducer
export default userSlice.reducer
