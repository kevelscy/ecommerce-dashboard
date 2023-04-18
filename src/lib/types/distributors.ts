import { IAddress } from './shared'

export interface IDistributorsOrdersDeliveries {
  id: number
  addres: IAddress
  purchasedProduct: {
    id: number
    title: string
    price: number
    image: string
    quantity: number
  }
  customer: {
    firstName: string
    lastName: string
    email: string
    phone: string
  }
}

export interface IDistributor {
  id: number
  firstName: string
  lastName: string
  email: string
  phone: string
  picture: string
  ordersDeliveries: IDistributorsOrdersDeliveries[]
}
