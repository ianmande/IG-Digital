import jwt from 'jsonwebtoken'

export const createToken = (item: {}) =>
  jwt.sign(item, process.env.REACT_APP_API_KEY || '')

export const decodeToken = (token: string) => jwt.decode(token)
