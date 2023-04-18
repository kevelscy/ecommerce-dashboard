export type TOrderStatus = 'PENDING' | 'DELIVERED'

export interface IOrder {
  id: number
  customer: {
    firstName: string
    lastName: string
    email: string
    phone: string
  },
  date: string
  status: TOrderStatus
  price: number
  delivery: boolean
}
