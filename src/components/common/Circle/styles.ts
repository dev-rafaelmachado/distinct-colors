import styled from 'styled-components/native'
import { CircleProps } from '.'

type CircleInsideProps = Omit<CircleProps, 'action'>

export const CircleContainer = styled.View<CircleInsideProps>`
  width: 90px;
  height: 90px;
  border-radius: 999px 999px;

  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: ${(props) =>
    props.side === 'top' ? '100px' : props.side === 'bottom' ? '-60px' : '0px'};

  background-color: ${(props) => props.theme.body};
`

export const CircleInside = styled.TouchableOpacity<CircleInsideProps>`
  width: 65px;
  height: 65px;
  border-radius: 999px;

  display: grid;
  place-items: center;

  background-color: ${(props) => props.color};
`
