export type IAction = {
  type: string
  payload?: any
  error?: any
}

export interface User {
  avatar?: string
  username: string
  name: string
  surname: string
}

export interface Post {
  image?: string
  message: string
  likes?: Array<User>
  author: User
  create_at: Date
  location: string
  status: 'drafted' | 'deleted' | 'published'
}

export interface Data {
  posts: Array<Post>
}
