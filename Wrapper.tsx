import React, { ReactNode } from 'react'
import { ThemeProvider as ThemeProv } from './src/contexts/ThemeContext'
import { GameProvider } from './src/contexts/GameContext'
import { ScoreProvider } from './src/contexts/ScoreContext'
import { ContextsStyles } from './src/styles/Contexts'

interface Props {
  children: ReactNode
}

export const Wrapper = ({ children }: Props) => {
  return (
    <ThemeProv>
      <ContextsStyles>
        <ScoreProvider>
          <GameProvider>{children}</GameProvider>
        </ScoreProvider>
      </ContextsStyles>
    </ThemeProv>
  )
}
