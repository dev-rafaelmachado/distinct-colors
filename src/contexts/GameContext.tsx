import React, { ReactNode, createContext, useState } from 'react'

export interface GameContextProps {
  difficulty: 'easy' | 'medium' | 'hard' | 'climb'
  changeDifficulty: (difficulty: 'easy' | 'medium' | 'hard' | 'climb') => void
  generateCircleColor: (score: number) => string[]
}

export const GameContext = createContext<GameContextProps | undefined>(
  undefined,
)

interface Props {
  children: ReactNode
}

export const GameProvider = ({ children }: Props) => {
  const [difficulty, setDifficulty] = useState<
    'easy' | 'medium' | 'hard' | 'climb'
  >('easy')

  const changeDifficulty = (
    difficulty: 'easy' | 'medium' | 'hard' | 'climb',
  ) => {
    setDifficulty(difficulty)
  }

  const generateCircleColor = (score: number): string[] => {
    const getRandomColor = (): number =>
      Math.floor(Math.random() * 200 + 55) - 30

    const blue: number = getRandomColor()
    const green: number = getRandomColor()
    const red: number = getRandomColor()

    if (difficulty !== 'climb') {
      const difficultyModifier =
        difficulty === 'easy' ? 60 : difficulty === 'medium' ? 40 : 20
      const color = [red, green, blue]
      const originalColor = `rgb(${color[0]}, ${color[1]}, ${color[2]})`
      const modifier: number =
        Math.random() > 0.5 ? difficultyModifier : -difficultyModifier

      if (blue > green && blue > red) {
        color[0] += modifier
      } else if (green > blue && green > red) {
        color[1] += modifier
      } else {
        color[2] += modifier
      }

      return [originalColor, `rgb(${color[0]}, ${color[1]}, ${color[2]})`]
    }

    const difficultyModifier = 50 - score + 20
    const modifier =
      Math.random() > 0.5 ? difficultyModifier : -difficultyModifier

    const color = [red, green, blue]
    const originalColor = `rgb(${color[0]}, ${color[1]}, ${color[2]})`

    const colorToModify = Math.floor(Math.random() * 3)
    color[colorToModify] += modifier

    return [originalColor, `rgb(${color[0]}, ${color[1]}, ${color[2]})`]
  }

  const contextValue: GameContextProps = {
    difficulty,
    changeDifficulty,
    generateCircleColor,
  }

  return (
    <GameContext.Provider value={contextValue}>{children}</GameContext.Provider>
  )
}
