import { useGame } from '../../hooks/useGame'
import { Circle } from '../common/Circle'

import { BoxContainer } from '../TopBar/styles'

export interface BoxContainerProps {
  variant: 'top' | 'bottom'
}

export const BottomBar = () => {
  const { changeDifficulty } = useGame()
  return (
    <BoxContainer variant="bottom">
      <Circle
        onPress={() => changeDifficulty('easy')}
        color="#98CE00"
        side="bottom"
      />
      <Circle
        onPress={() => changeDifficulty('medium')}
        color="#F58F29"
        side="bottom"
      />
      <Circle
        onPress={() => changeDifficulty('hard')}
        color="#E05263"
        side="bottom"
      />
      <Circle
        onPress={() => changeDifficulty('climb')}
        color="#470063"
        side="bottom"
      />
    </BoxContainer>
  )
}
