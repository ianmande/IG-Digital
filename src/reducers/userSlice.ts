import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from '@reduxjs/toolkit'
import { User } from 'types/app'

const PREFIX = 'users'
const userAdapter = createEntityAdapter<{ users: User[] }>({})

const initialState: { users: User[] } = {
  users: [
    {
      username: '',
      name: '',
      surname: '',
    },
  ],
}

/**
 * Iniciar sesion
 * @param username: string
 */
export const login = createAsyncThunk(
  `${PREFIX}/INICIAR-SESION`,
  async (username: Part<User, 'username'>) => {
    try {
    } catch (error) {}
  }
)

export const userSlice = createSlice({
  name: PREFIX,
  initialState: userAdapter.getInitialState(initialState),
  reducers: {},
  extraReducers: {},
})

//Actions

// Reducer
export default userSlice.reducer
