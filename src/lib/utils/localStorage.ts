export const getLocalStorage = (key: string) => {
  const item = localStorage.getItem(key)
  const itemParsed = JSON.parse(item as string)

  return !itemParsed ? null : itemParsed
}

export const setLocalStorage = (key: string, value: any) => localStorage.setItem(key, JSON.stringify(value))

export const removeLocalStorage = (key: string) => localStorage.removeItem(key)
