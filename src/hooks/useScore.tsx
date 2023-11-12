import { useContext } from 'react'
import { ScoreContext, ScoreContextProps } from '../contexts/ScoreContext'

export const useScore = (): ScoreContextProps => {
  const context = useContext(ScoreContext)

  if (!context) {
    throw new Error('useScore deve ser usado dentro de um ScoreProvider')
  }

  return context
}
