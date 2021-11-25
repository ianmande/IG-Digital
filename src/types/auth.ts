import { ServerStatus } from './serverStatus'

export interface User {
  email: string
  full_name: string
  profile_image: string
}

export interface Auth extends ServerStatus {
  isAuthenticated: boolean
  user: User
}
