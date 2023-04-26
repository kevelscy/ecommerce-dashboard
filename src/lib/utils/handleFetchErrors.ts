// import { toast } from 'sonner'

type TToastType = 'success' | 'error' | 'message'

export const handleFetchErrors = (status: number, message: string) => {
  console.error(status, message)

  const typeStatus: TToastType = (status >= 200 && status < 300)
    ? 'success'
    : (status >= 300 && status < 500)
      ? 'message'
      : (status >= 500)
        ? 'error'
        : 'message'

  // toast[typeStatus](message || 'Error')
  console.log(typeStatus)
}
