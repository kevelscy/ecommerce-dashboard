export interface IGenericFetchReturn {
  data: any | null,
  error: {
    status: number,
    message: string
  } | null
}

export interface IFetchErrorReturn {
  data: null,
  error: {
    status: number,
    message: string
  }
}
