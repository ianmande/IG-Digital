//Vendors
import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from '@reduxjs/toolkit'

// Constants
import { localKey, localKeyPosts } from 'config/constants'
import { RootState } from 'store'

// Types
import { ThunkAPI } from 'types/api'
import { IAction } from 'types/app'
import { Post } from 'types/app'
import { ServerStatus } from 'types/serverStatus'

// Utils
import { searchItemLocal, setItemLocal } from 'utils'
import { fetchAuthLogout } from './authSlice'

interface PostsReducer extends ServerStatus {
  posts: Post[]
}

const PREFIX = 'posts'
const postAdapter = createEntityAdapter<PostsReducer>({})

const initialState: PostsReducer = {
  posts: [
    {
      image: '',
      message: '',
      author: {
        avatar:
          'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/avatar-2-1583234102.jpg',
        username: 'ianmdz',
        name: 'ian',
        surname: 'mande',
      },
      create_at: `${new Date('2020-11-27')}`,
      status: 'published',
      location: '',
    },
  ],
  isLoading: false,
  errorMessage: '',
  serverErrors: false,
  success: false,
}

/**
 * Crear Nuevo posts
 */
export const createPost = createAsyncThunk(
  `${PREFIX}/CREATE-POST`,
  async (post: any, { getState, dispatch }: ThunkAPI) => {
    const access_app = await searchItemLocal(localKey)

    if (access_app) {
      const {
        postReducer: { posts },
      }: RootState = getState()

      const newPosts = [
        ...posts,
        {
          ...post,
          author: access_app.user,
          create_at: `${new Date()}`,
          status: 'published',
        },
      ]

      setItemLocal(localKeyPosts, newPosts)

      return newPosts
    } else {
      dispatch(fetchAuthLogout())
    }
  }
)

/**
 * Verificar si el usuario sigue
 * logeado cuando se recarga el navegador
 */
export const browserReloadPosts = createAsyncThunk(
  `${PREFIX}/browserReloadPosts`,
  (params, { dispatch }) => {
    const localPosts = searchItemLocal(localKeyPosts)
    if (localPosts) {
      return localPosts
    } else {
      throw Error('No autenticado, por favor iniciar sesion')
    }
  }
)

export const postSlice = createSlice({
  name: PREFIX,
  initialState: postAdapter.getInitialState(initialState),
  reducers: {
    clearServer(state) {
      state.serverErrors = false
      state.success = false
    },
  },
  extraReducers: (build) => {
    build.addCase(createPost.pending, (state) => {
      state.isLoading = true
    })
    build.addCase(createPost.fulfilled, (state, action: IAction) => {
      state.posts = action.payload
      state.isLoading = false
      state.success = true
    })
    build.addCase(browserReloadPosts.fulfilled, (state, action: IAction) => {
      state.posts = action.payload
    })
  },
})

//Actions
export const { clearServer } = postSlice.actions

// Reducer
export default postSlice.reducer
