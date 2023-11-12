import { TouchableOpacityProps } from 'react-native'

import { ButtonContainer, ButtonVariant, Title } from './styles'

interface ButtonProps extends TouchableOpacityProps {
  variant: ButtonVariant
  text?: string
}

export function Button({ variant = 'primary', text, ...props }: ButtonProps) {
  return (
    <ButtonContainer {...props} variant={variant}>
      {text && <Title variant={variant}>{text}</Title>}
    </ButtonContainer>
  )
}
