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

// Constants
import { localKeyUsers } from 'config/constants'

interface IUsers extends ServerStatus {
  users: User[]
}

const PREFIX = 'users'

const userAdapter = createEntityAdapter<IUsers>({})

const initialState: IUsers = {
  users: [
    {
      avatar:
        'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/avatar-2-1583234102.jpg',
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
  reducers: {
    clearErrors(state) {
      state.serverErrors = false
      state.success = false
    },
  },
  extraReducers: (build) => {
    build.addCase(createAccount.pending, (state) => {
      state.isLoading = true
    })
    build.addCase(createAccount.fulfilled, (state, action: IAction) => {
      state.isLoading = initialState.isLoading

      setItemLocal(localKeyUsers, [...state.users, action.payload])

      state.users = [...state.users, action.payload]
      state.success = true
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
export const { clearErrors } = userSlice.actions

// Reducer
export default userSlice.reducer
