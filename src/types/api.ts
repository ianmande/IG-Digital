import { AxiosRequestConfig } from 'axios'

export interface RequestOptionsType extends AxiosRequestConfig {
  authRequire?: boolean
}
