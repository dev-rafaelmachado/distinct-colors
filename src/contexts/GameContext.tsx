import React, { ReactNode, createContext, useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

interface RecordsByDifficulty {
  easy: number
  medium: number
  hard: number
  climb: number
}
export interface GameContextProps {
  score: number
  record: RecordsByDifficulty
  difficulty: 'easy' | 'medium' | 'hard' | 'climb'
  colors: string[]
  position: number
  getHit: () => void
  getMiss: () => void
  changeDifficulty: (difficulty: 'easy' | 'medium' | 'hard' | 'climb') => void
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
  const [score, setScore] = useState<number>(0)
  const [record, setRecord] = useState<RecordsByDifficulty>({
    easy: 0,
    medium: 0,
    hard: 0,
    climb: 0,
  })
  const [colors, setColors] = useState<string[]>([])
  const [position, setPosition] = useState<number>(0)

  useEffect(() => {
    const getRecord = async () => {
      const value = await AsyncStorage.getItem('@record')
      if (value !== null) {
        setRecord(JSON.parse(value))
      }
    }
    getRecord()
    setColors(generateCircleColor())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const generateCircleColor = (): string[] => {
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

  const newRecord = () => {
    setRecord((prev) => {
      const newRecord = { ...prev }
      newRecord[difficulty] = score
      AsyncStorage.setItem('@record', JSON.stringify(newRecord))
      return newRecord
    })
  }

  const getHit = () => {
    setScore((prevScore) => prevScore + 1)
    setColors(generateCircleColor())
    setPosition(Math.floor(Math.random() * 9))
  }

  const getMiss = () => {
    score > record[difficulty] && newRecord()
    setScore(0)
  }

  const changeDifficulty = (
    difficulty: 'easy' | 'medium' | 'hard' | 'climb',
  ) => {
    score > record[difficulty] && newRecord()
    setScore(0)
    setDifficulty(difficulty)
    setColors(generateCircleColor())
    setPosition(Math.floor(Math.random() * 9))
  }

  const contextValue: GameContextProps = {
    score,
    record,
    difficulty,
    colors,
    position,
    getHit,
    getMiss,
    changeDifficulty,
  }

  return (
    <GameContext.Provider value={contextValue}>{children}</GameContext.Provider>
  )
}
