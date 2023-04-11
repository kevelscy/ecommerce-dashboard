import { useEffect, useState } from 'react'

export const useTheme = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light')

  const verifyLocalTheme = () => {
    const theme = localStorage.getItem('theme')

    if (!theme) {
      document.querySelector('html').classList.remove('dark')
      localStorage.setItem('theme', 'light')
      setTheme('light')
    }

    if (
      theme === 'dark' ||
      (!('theme' in window.localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.querySelector('html').classList.add('dark')
      localStorage.setItem('theme', 'dark')
      setTheme('dark')
    } else {
      document.querySelector('html').classList.remove('dark')
      localStorage.setItem('theme', 'light')
      setTheme('light')
    }
  }

  useEffect(() => {
    verifyLocalTheme()
  }, [theme])

  const toggleTheme = () => {
    if (theme === 'light') {
      localStorage.setItem('theme', 'dark')
      setTheme('dark')
      document.documentElement.classList.add('dark')
    } else {
      localStorage.setItem('theme', 'light')
      setTheme('light')
      document.documentElement.classList.remove('dark')
    }
  }

  return { theme, toggleTheme }
}
