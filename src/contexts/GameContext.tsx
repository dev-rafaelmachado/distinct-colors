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
    const difficultyModifier =
      {
        easy: 60,
        medium: 40,
        hard: 20,
        climb: undefined,
      }[difficulty] || (score > 50 ? 10 : 60 - score)

    const getRandomColor = (): number => {
      const number = Math.floor(Math.random() * 255)
      return number + difficultyModifier > 255
        ? number - difficultyModifier
        : number - difficultyModifier < 0
        ? number + difficultyModifier
        : number
    }

    const color = ['red', 'green', 'blue'].map(() => getRandomColor())

    const originalColor = `rgb(${color.join(', ')})`

    const maxColorIndex = color.indexOf(Math.max(...color))
    color[maxColorIndex] =
      color[maxColorIndex] >= 180 &&
      color[maxColorIndex] >
        color.reduce((sum, val) => sum + val, 0) - color[maxColorIndex]
        ? color[maxColorIndex] - difficultyModifier
        : color[maxColorIndex] + difficultyModifier

    return [originalColor, `rgb(${color.join(', ')})`]
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
