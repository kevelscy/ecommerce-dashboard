/* eslint-disable no-unused-vars */
import { IGenericFetchReturn } from './http'

export enum ERole {
  USER = 'USER',
  MODERATOR = 'MODERATOR',
  ADMIN = 'ADMIN'
}

export interface IRole {
  title: ERole.USER | ERole.MODERATOR | ERole.ADMIN
  users: []
  createdAt: string
  updatedAt: string
  id: string
}

export interface IAuth {
  id: string
  email: string
  firstName: string
  lastName: string
  password: string
  isDeleted: boolean,
  picture: string | null
  phone: string | null
  roles: IRole[]
  createdAt: string
  updatedAt: string
  accessToken: string
  refreshToken: string
}

export interface IReturnAuth extends IGenericFetchReturn {
  data: IAuth
}
