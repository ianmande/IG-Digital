// Vendors
import axios, { AxiosInstance } from 'axios'

const BASE_URL = process.env.REACT_APP_API_URL

/**
 * Definición de la conexión con la API
 */

const API: AxiosInstance = axios.create({
  baseURL: BASE_URL,
})

export default API
