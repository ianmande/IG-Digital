import { User } from './app'
import { ServerStatus } from './serverStatus'

export interface Auth extends ServerStatus {
  isAuthenticated: boolean
  user: User
}
