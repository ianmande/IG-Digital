// Vendors
import jwt from 'jsonwebtoken'

// Constants
import { localKey } from 'config/constants'

import API from './api'

import { RequestOptionsType } from 'types/api'

// Utils
import { removeItemLocal, searchItemLocal } from 'utils'

// Store
import { store } from 'store'
import { expiredAuth } from 'reducers/authSlice'

/**
 * Obtener headers
 * @param authRequired boolean
 * @returns headers
 */
const getHeaders = (authRequired: boolean) => {
  if (authRequired) {
    const authotization = searchItemLocal(localKey)
    const token: any = jwt.decode(authotization.access_token)

    if (authotization?.exp * 1000 < Date.now()) {
      store.dispatch(expiredAuth())
      return removeItemLocal(localKey)
    }
    return token
      ? { Authorization: `Bearer ${authotization.access_token}` }
      : {}
  }
  return {}
}

type AxiosResult<T> = {
  data?: T
  error?: any
  code?: string
  status?: number | string
}

/**
 * Función genérica para comunicarse con la API
 * @param url: string
 * @param options: RequestOptionsType
 * @returns Promise: <AxiosResult<T>>
 */
export const request = async <T = any>(
  url: string,
  options: RequestOptionsType = {}
): Promise<AxiosResult<T>> => {
  const {
    method = 'get',
    data = {},
    authRequire = false,
    params,
    headers = {},
  } = options
  try {
    const response = await API.request<T>({
      url,
      params,
      method,
      data,
      headers: { ...getHeaders(authRequire), ...headers },
    })

    return { data: response.data, error: false }
  } catch (error: any) {
    if (error.response) {
      return {
        code: 'HTTP_ERROR',
        status: error.response.status,
        data: error.response.data,
        error,
      }
    }
    return {
      error: {
        code: 'CONNECTION',
        error,
      },
    }
  }
}
