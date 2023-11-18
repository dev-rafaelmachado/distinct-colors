import { BallContainer } from './styles'

export interface BallProps {
  color: string
  action: () => void
  style?: object
}

export const Ball = ({ color, action }: BallProps) => {
  return <BallContainer color={color} onPress={action} />
}
