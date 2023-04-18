/* eslint-disable no-unused-vars */
import { IAddress } from './shared'

export type TRoles = 'USER' | 'MODERATOR' | 'DISTRIBUTOR' | 'SELLER' | 'ADMIN'

export interface IUser {
  id: number
  picture: string | null
  firstName: string
  lastName: string
  email: string
  phone: string
  deliveryAddres: IAddress
  roles: TRoles[]
  createdAt: Date
  updatedAt: Date
}
