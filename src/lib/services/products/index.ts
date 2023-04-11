export const getProducts = async () => {
  const res = await fetch('https://api.escuelajs.co/api/v1/products?offset=0&limit=10')
  const data = await await res.json()

  return data
}
