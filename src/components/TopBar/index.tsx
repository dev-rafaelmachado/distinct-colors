import { useTheme } from 'styled-components'
import { useTheme as useMeTheme } from '../../hooks/useTheme'
import { Circle } from '../common/Circle'
import { BoxContainer } from './styles'

import Ionicons from '@expo/vector-icons/Ionicons'
import { Linking } from 'react-native'

export interface BoxContainerProps {
  variant: 'top' | 'bottom'
}

export const TopBar = () => {
  const { secondary, body } = useTheme()
  const { toggleTheme, theme } = useMeTheme()

  return (
    <BoxContainer variant="top">
      <Circle
        onPress={() => {
          Linking.openURL('https://google.com')
        }}
        side="top"
        color={secondary}
      >
        <Ionicons
          name="logo-github"
          size={36}
          color={body}
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: [{ translateX: -18 }, { translateY: -18 }],
          }}
        />
      </Circle>
      <Circle onPress={toggleTheme} side="top" color={secondary}>
        <Ionicons
          name={theme === 'light' ? 'moon' : 'sunny'}
          size={36}
          color={body}
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: [{ translateX: -18 }, { translateY: -18 }],
          }}
        />
      </Circle>
    </BoxContainer>
  )
}
