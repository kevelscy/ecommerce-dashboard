export interface ISoldProducts {
  id: number
  title: string
  price: number
  image: string
  quantity: number
  saleDate: Date
}

export interface ISeller {
  id: number
  firstName: string
  lastName: string
  email: string
  phone: string
  picture: string
  referalCode: string
  soldProducts: ISoldProducts[]
}
