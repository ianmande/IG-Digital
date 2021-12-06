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
import { IAction, ViewPost } from 'types/app'
import { Post } from 'types/app'
import { ServerStatus } from 'types/serverStatus'

// Utils
import { searchItemLocal, setItemLocal } from 'utils'
import { foundPost } from 'utils/array'
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
      message:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore dolor, amet sint laborum voluptate iure incidunt optio! Consequatur quibusdam, enim nesciunt nihil nemo, sint ad, fuga tempore adipisci molestias perferendis.',
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

/**
 * Verificar si el usuario sigue
 * logeado cuando se recarga el navegador
 */

export const likeToPosts = createAsyncThunk(
  `${PREFIX}/LIKE_TO_POSTS`,
  (params: ViewPost, { getState, dispatch }: ThunkAPI) => {
    const {
      postReducer: { posts },
    }: RootState = getState()

    const postFound = posts.find((post) => foundPost(params, post))
    const postFoundIndex = posts.findIndex((post) => foundPost(params, post))

    console.log('postFound', posts.splice(postFoundIndex, 1))
    console.log('postFound', postFound)

    return
  }
)

/**
 * Verificar si el usuario sigue
 * logeado cuando se recarga el navegador
 */

export const removedPosts = createAsyncThunk(
  `${PREFIX}/REMOVED_POTS`,
  (params: ViewPost, { getState, dispatch }: ThunkAPI) => {
    const {
      postReducer: { posts },
    }: RootState = getState()

    const postFoundIndex = posts.findIndex((post) => foundPost(params, post))

    return posts.map((currentPost, index) => {
      if (postFoundIndex === index) {
        return { ...currentPost, status: 'deleted' }
      } else {
        return currentPost
      }
    })
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
    build.addCase(removedPosts.pending, (state) => {
      state.isLoading = true
    })
    build.addCase(removedPosts.fulfilled, (state, action: IAction) => {
      state.posts = action.payload
      state.isLoading = false
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
