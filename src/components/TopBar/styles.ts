import styled, { css } from 'styled-components/native'

import { BoxContainerProps } from '.'

type BoxProps = Omit<BoxContainerProps, 'circles'>

const boxVariants = {
  top: {
    top: 0,
    bottom: 'auto',
    height: '100px',
  },
  bottom: {
    top: 'auto',
    bottom: 0,
    height: '50px',
  },
}

export const BoxContainer = styled.View<BoxProps>`
  width: 100%;
  position: absolute;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  ${(props) => {
    return css`
      background-color: ${props.theme.primary};
      top: ${boxVariants[props.variant].top};
      bottom: ${boxVariants[props.variant].bottom};
      height: ${boxVariants[props.variant].height};
    `
  }};
`
