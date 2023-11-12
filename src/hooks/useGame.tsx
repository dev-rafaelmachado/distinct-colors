import { useContext } from 'react'
import { GameContext, GameContextProps } from '../contexts/GameContext'

export const useGame = (): GameContextProps => {
  const context = useContext(GameContext)

  if (!context) {
    throw new Error('useScore deve ser usado dentro de um ScoreProvider')
  }

  return context
}
