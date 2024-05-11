import { ListRenderItem } from 'react-native'
import { useGame } from '../../hooks/useGame'
import { Ball, BallProps } from '../common/Ball'
import { GameBoxContainer, GameGrid } from './styles'

export const GameBox: React.FC = () => {
  const { colors, position, getHit, getMiss } = useGame()

  const data = [...Array(9)].map((_, index) => {
    if (index === position) {
      return {
        key: index.toString(),
        action: getHit,
        color: colors[1],
      }
    }
    return { key: index.toString(), action: getMiss, color: colors[0] }
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
