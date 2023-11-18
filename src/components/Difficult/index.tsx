import { Text, View } from 'react-native'
import { useGame } from '../../hooks/useGame'
import { useTheme } from 'styled-components'

export const Difficult = () => {
  const { difficulty } = useGame()
  const { body, text } = useTheme()
  return (
    <View
      style={{
        flex: 1,
        alignContent: 'flex-start',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
      }}
    >
      <View
        style={{
          padding: 3,
          paddingHorizontal: 20,
          backgroundColor: text,
          borderRadius: 5,
        }}
      >
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            color: body,
          }}
        >
          {difficulty.toLocaleUpperCase()}
        </Text>
      </View>
    </View>
  )
}
