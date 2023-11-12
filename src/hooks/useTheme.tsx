import { useContext } from 'react'
import { ThemeContext, ThemeContextProps } from '../contexts/ThemeContext'

export const useTheme = (): ThemeContextProps => {
  const context = useContext(ThemeContext)

  if (!context) {
    throw new Error('useTheme deve ser usado dentro de um ThemeProvider')
  }

  return context
}
