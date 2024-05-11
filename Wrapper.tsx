import React, { ReactNode } from 'react'
import { ThemeProvider as ThemeProv } from './src/contexts/ThemeContext'
import { GameProvider } from './src/contexts/GameContext'
import { ContextsStyles } from './src/styles/Contexts'

interface Props {
  children: ReactNode
}

export const Wrapper = ({ children }: Props) => {
  return (
    <ThemeProv>
      <ContextsStyles>
        <GameProvider>{children}</GameProvider>
      </ContextsStyles>
    </ThemeProv>
  )
}
