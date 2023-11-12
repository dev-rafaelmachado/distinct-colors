import React, { ReactNode } from 'react'
import { CircleContainer, CircleInside } from './styles'
import { TouchableOpacityProps } from 'react-native'

export interface CircleProps extends TouchableOpacityProps {
  color: string
  side?: 'top' | 'bottom'
  children?: ReactNode
}

export const Circle = ({ color, side, children, ...props }: CircleProps) => {
  return (
    <CircleContainer side={side} color={color}>
      <CircleInside {...props} side={side} color={color}>
        {children}
      </CircleInside>
    </CircleContainer>
  )
}
