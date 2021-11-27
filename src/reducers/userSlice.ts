//Vendors
import { createEntityAdapter, createSlice } from '@reduxjs/toolkit'

//Types
import { User } from 'types/app'

interface IUsers {
  isLoading: boolean
  users: User[]
}

const PREFIX = 'users'

const userAdapter = createEntityAdapter<IUsers>({})

const initialState: IUsers = {
  isLoading: false,
  users: [
    {
      username: 'ianmdz',
      name: 'ian',
      surname: 'mande',
    },
  ],
}

export const userSlice = createSlice({
  name: PREFIX,
  initialState: userAdapter.getInitialState(initialState),
  reducers: {},
})

//Actions

// Reducer
export default userSlice.reducer
