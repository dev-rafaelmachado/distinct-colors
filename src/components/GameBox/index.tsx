import { useEffect, useState } from 'react'
import { ListRenderItem } from 'react-native'
import { useGame } from '../../hooks/useGame'
import { useScore } from '../../hooks/useScore'
import { Ball, BallProps } from '../common/Ball'
import { GameBoxContainer, GameGrid } from './styles'

export const GameBox: React.FC = () => {
  const { generateCircleColor, difficulty } = useGame()
  const { newRecord, resetScore, addScore, record, score } = useScore()

  const [position, setPosition] = useState<number>(0)
  const [colors, setColor] = useState<string[]>(['', ''])

  const loose = () => {
    if (score > record[difficulty]) {
      newRecord(difficulty)
    }
    resetScore()
  }

  const getHit = () => {
    addScore()
    setColor(generateCircleColor(score))
    setPosition(Math.floor(Math.random() * 9))
  }

  useEffect(() => {
    setColor(generateCircleColor(score))
    resetScore()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [difficulty])

  const data = [...Array(9)].map((_, index) => {
    if (index === position) {
      return {
        key: index.toString(),
        action: getHit,
        color: colors[1],
      }
    }
    return { key: index.toString(), action: loose, color: colors[0] }
  })

  const renderItem: ListRenderItem<BallProps> = ({ item }) => (
    <Ball color={item.color} action={item.action} />
  )

  return (
    <GameBoxContainer>
      {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
      {/* @ts-ignore */}
      <GameGrid data={data} renderItem={renderItem} numColumns={3} />
    </GameBoxContainer>
  )
}
