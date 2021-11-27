import { AxiosRequestConfig } from 'axios'

export interface RequestOptionsType extends AxiosRequestConfig {
  authRequire?: boolean
}

export interface ThunkAPI {
  dispatch: Function
  getState: Function
  extra?: any
  requestId: string
  signal: AbortSignal
}
