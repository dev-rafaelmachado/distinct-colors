import React, { ReactNode, createContext, useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

interface RecordsByDifficulty {
  easy: number
  medium: number
  hard: number
  climb: number
}

export interface ScoreContextProps {
  score: number
  record: RecordsByDifficulty
  addScore: () => void
  resetScore: () => void
  newRecord: (difficulty: 'easy' | 'medium' | 'hard' | 'climb') => void
}

export const ScoreContext = createContext<ScoreContextProps | undefined>(
  undefined,
)

interface Props {
  children: ReactNode
}

export const ScoreProvider = ({ children }: Props) => {
  const [score, setScore] = useState<number>(0)
  const [record, setRecord] = useState<RecordsByDifficulty>({
    easy: 0,
    medium: 0,
    hard: 0,
    climb: 0,
  })

  useEffect(() => {
    const getRecord = async () => {
      const value = await AsyncStorage.getItem('@record')
      if (value !== null) {
        setRecord(JSON.parse(value))
      }
    }
    getRecord()
  }, [])

  const addScore = () => {
    setScore((prevScore) => prevScore + 1)
  }

  const resetScore = () => {
    setScore(0)
  }

  const newRecord = (difficulty: 'easy' | 'medium' | 'hard' | 'climb') => {
    setRecord((prev) => {
      const newRecord = { ...prev }
      newRecord[difficulty] = score
      AsyncStorage.setItem('@record', JSON.stringify(newRecord))
      return newRecord
    })
  }

  const contextValue: ScoreContextProps = {
    score,
    record,
    addScore,
    resetScore,
    newRecord,
  }

  return (
    <ScoreContext.Provider value={contextValue}>
      {children}
    </ScoreContext.Provider>
  )
}
