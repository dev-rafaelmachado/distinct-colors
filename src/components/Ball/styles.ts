import styled from 'styled-components/native'
import { BallProps } from '.'

const BallSize = 90

type BallContainerProps = Omit<BallProps, 'action'>

export const BallContainer = styled.TouchableOpacity<BallContainerProps>`
  width: ${BallSize}px;
  height: ${BallSize}px;
  margin: 10px;

  border-radius: ${BallSize / 2}px;
  background-color: ${(props) => props.color};
`
