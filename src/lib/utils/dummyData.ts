import { IOrder } from '@/lib/types/orders'
import { IDistributor } from '@/lib/types/distributors'
import { IUser } from '@/lib/types/users'
import { ISeller } from '../types'

export const orders: IOrder[] = [
  {
    id: 132,
    customer: {
      firstName: 'Kevin',
      lastName: 'Blanco',
      email: 'kblanco349@gmail.com',
      phone: '+584125544458'
    },
    date: '22/04/2023',
    status: 'PENDING',
    price: 23.22,
    delivery: true
  },
  {
    id: 12356346,
    customer: {
      firstName: 'Mario',
      lastName: 'Peña',
      email: 'mappedev@gmail.com',
      phone: '+581231234'
    },
    date: '26/01/2023',
    status: 'DELIVERED',
    price: 100.23,
    delivery: false
  },
  {
    id: 135768,
    customer: {
      firstName: 'Ana',
      lastName: 'García',
      email: 'anagarcia@gmail.com',
      phone: '+584125543219'
    },
    date: '30/03/2023',
    status: 'DELIVERED',
    price: 50.99,
    delivery: true
  },
  {
    id: 135769,
    customer: {
      firstName: 'Juan',
      lastName: 'González',
      email: 'juangonzalez@gmail.com',
      phone: '+584129998877'
    },
    date: '12/04/2023',
    status: 'PENDING',
    price: 15.50,
    delivery: false
  },
  {
    id: 135770,
    customer: {
      firstName: 'Luisa',
      lastName: 'Pérez',
      email: 'luisaperez@gmail.com',
      phone: '+584121234567'
    },
    date: '01/04/2023',
    status: 'DELIVERED',
    price: 89.99,
    delivery: true
  },
  {
    id: 135771,
    customer: {
      firstName: 'Pedro',
      lastName: 'Martínez',
      email: 'pedromartinez@gmail.com',
      phone: '+584125678901'
    },
    date: '05/04/2023',
    status: 'PENDING',
    price: 10.00,
    delivery: false
  },
  {
    id: 135772,
    customer: {
      firstName: 'María',
      lastName: 'Rojas',
      email: 'mariarojas@gmail.com',
      phone: '+584129999888'
    },
    date: '08/04/2023',
    status: 'DELIVERED',
    price: 75.00,
    delivery: true
  },
  {
    id: 135773,
    customer: {
      firstName: 'Jorge',
      lastName: 'Suárez',
      email: 'jorgesuarez@gmail.com',
      phone: '+584121212121'
    },
    date: '10/04/2023',
    status: 'PENDING',
    price: 5.99,
    delivery: false
  }
]

export const distributors: IDistributor[] = [
  {
    id: 1,
    firstName: 'John',
    lastName: 'Doe',
    email: 'johndoe@gmail.com',
    phone: '+584123456789',
    picture: 'https://randomuser.me/api/portraits/men/1.jpg',
    ordersDeliveries: [
      {
        id: 123,
        addres: {
          municipality: 'Caracas',
          avenueOrStreet: 'Av. Libertador',
          aditionalInfo: 'Torre X, Piso 10, Apto. 1001'
        },
        purchasedProduct: {
          id: 1,
          title: 'Laptop',
          price: 1200,
          image: 'https://picsum.photos/200/300',
          quantity: 1
        },
        customer: {
          firstName: 'Maria',
          lastName: 'Perez',
          email: 'mariaperez@gmail.com',
          phone: '+58414567890'
        }
      }
    ]
  },
  {
    id: 2,
    firstName: 'Kevin',
    lastName: 'Blanco',
    email: 'kevinblanco@gmail.com',
    phone: '+584123456789',
    picture: 'https://randomuser.me/api/portraits/men/5.jpg',
    ordersDeliveries: [
      {
        id: 456,
        addres: {
          municipality: 'Barquisimeto',
          avenueOrStreet: 'Av. Libertador',
          aditionalInfo: 'Edif. Plaza, Piso 2, Local 202'
        },
        purchasedProduct: {
          id: 2,
          title: 'Smartphone',
          price: 800,
          image: 'https://picsum.photos/200/300',
          quantity: 1
        },
        customer: {
          firstName: 'Carlos',
          lastName: 'Gonzalez',
          email: 'carlosgonzalez@gmail.com',
          phone: '+58412345678'
        }
      }
    ]
  },
  {
    id: 3,
    firstName: 'Bob',
    lastName: 'Smith',
    email: 'bobsmith@gmail.com',
    phone: '+584123456789',
    picture: 'https://randomuser.me/api/portraits/men/2.jpg',
    ordersDeliveries: [
      {
        id: 789,
        addres: {
          municipality: 'Maracaibo',
          avenueOrStreet: 'Av. Fuerzas Armadas',
          aditionalInfo: 'Edif. Oro, Piso 5, Apto. 504'
        },
        purchasedProduct: {
          id: 3,
          title: 'Tablet',
          price: 500,
          image: 'https://picsum.photos/200/300',
          quantity: 2
        },
        customer: {
          firstName: 'Ana',
          lastName: 'Gutierrez',
          email: 'anagutierrez@hotmail.com',
          phone: '+58414567890'
        }
      }
    ]
  }
]

export const users: IUser[] = [
  {
    id: 1,
    picture: 'https://example.com/picture1.jpg',
    firstName: 'John',
    lastName: 'Doe',
    email: 'johndoe@example.com',
    phone: '123456789',
    deliveryAddres: {
      municipality: 'Anytown',
      avenueOrStreet: '123 Main St',
      aditionalInfo: 'Apt 4'
    },
    roles: ['USER', 'DISTRIBUTOR'],
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 2,
    picture: null,
    firstName: 'Jane',
    lastName: 'Doe',
    email: 'janedoe@example.com',
    phone: '987654321',
    deliveryAddres: {
      municipality: 'Anytown',
      avenueOrStreet: '456 Oak Ave',
      aditionalInfo: ''
    },
    roles: ['USER', 'MODERATOR'],
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 3,
    picture: 'https://example.com/picture3.jpg',
    firstName: 'Bob',
    lastName: 'Smith',
    email: 'bobsmith@example.com',
    phone: '555555555',
    deliveryAddres: {
      municipality: 'Othertown',
      avenueOrStreet: '789 Elm St',
      aditionalInfo: 'Suite 200'
    },
    roles: ['ADMIN'],
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 4,
    picture: 'https://example.com/picture4.jpg',
    firstName: 'Alice',
    lastName: 'Jones',
    email: 'alicejones@example.com',
    phone: '111222333',
    deliveryAddres: {
      municipality: 'Somewhere',
      avenueOrStreet: '321 Pine St',
      aditionalInfo: ''
    },
    roles: ['USER', 'SELLER'],
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 5,
    picture: null,
    firstName: 'Dave',
    lastName: 'Johnson',
    email: 'davejohnson@example.com',
    phone: '444444444',
    deliveryAddres: {
      municipality: 'Nowhere',
      avenueOrStreet: '555 Cedar Ave',
      aditionalInfo: 'Unit 10'
    },
    roles: ['USER'],
    createdAt: new Date(),
    updatedAt: new Date()
  }
]

export const sellers: ISeller[] = [
  {
    id: 1,
    firstName: 'Mario',
    lastName: 'Peña',
    email: 'mappedev@example.com',
    phone: '+586456232',
    picture: 'https://randomuser.me/api/portraits/men/10.jpg',
    referalCode: 'MARIO_CODIGO43',
    soldProducts: [
      {
        id: 5,
        title: 'Camisa de algodón',
        price: 29.99,
        image: 'https://picsum.photos/640/640?r=7245',
        quantity: 3,
        saleDate: new Date()
      }
    ]
  },
  {
    id: 2,
    firstName: 'Lucía',
    lastName: 'Gómez',
    email: 'luciagomez@example.com',
    phone: '+5491178123456',
    picture: 'https://randomuser.me/api/portraits/women/5.jpg',
    referalCode: 'LUCIA_CODIGO17',
    soldProducts: [
      {
        id: 6,
        title: 'Pantalón de cuero',
        price: 89.99,
        image: 'https://picsum.photos/640/640?r=2365',
        quantity: 1,
        saleDate: new Date()
      },
      {
        id: 7,
        title: 'Bufanda de lana',
        price: 19.99,
        image: 'https://picsum.photos/640/640?r=6513',
        quantity: 2,
        saleDate: new Date()
      }
    ]
  },
  {
    id: 3,
    firstName: 'Carlos',
    lastName: 'González',
    email: 'carlosgonzalez@example.com',
    phone: '+1456789456',
    picture: 'https://randomuser.me/api/portraits/men/23.jpg',
    referalCode: 'CARLOS_CODIGO58',
    soldProducts: [
      {
        id: 8,
        title: 'Gorra de béisbol',
        price: 14.99,
        image: 'https://picsum.photos/640/640?r=3648',
        quantity: 3,
        saleDate: new Date()
      }
    ]
  },
  {
    id: 4,
    firstName: 'Ana',
    lastName: 'Martínez',
    email: 'anamartinez@example.com',
    phone: '+1555555555',
    picture: 'https://randomuser.me/api/portraits/women/33.jpg',
    referalCode: 'ANA_CODIGO42',
    soldProducts: [
      {
        id: 9,
        title: 'Pendientes de plata',
        price: 24.99,
        image: 'https://picsum.photos/640/640?r=8746',
        quantity: 2,
        saleDate: new Date()
      },
      {
        id: 10,
        title: 'Collar de perlas',
        price: 39.99,
        image: 'https://picsum.photos/640/640?r=1253',
        quantity: 1,
        saleDate: new Date()
      },
      {
        id: 11,
        title: 'Anillo de diamantes',
        price: 299.99,
        image: 'https://picsum.photos/640/640?r=2378',
        quantity: 1,
        saleDate: new Date()
      }
    ]
  }
]
