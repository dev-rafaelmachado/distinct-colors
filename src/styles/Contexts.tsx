import { ReactNode } from 'react'

import { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme } from './Theme'
import { useTheme } from '../hooks/useTheme'

interface Props {
  children: ReactNode
}

export function ContextsStyles({ children }: Props) {
  const { theme } = useTheme()
  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      {/* <GlobalStyles /> */}
      {children}
    </ThemeProvider>
  )
}
