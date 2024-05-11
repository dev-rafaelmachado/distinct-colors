import { Text, View } from 'react-native'
import { useTheme } from 'styled-components'
import { useGame } from '../../hooks/useGame'

export const Score = () => {
  const { score, record } = useGame()
  const { difficulty } = useGame()
  const { text } = useTheme()
  return (
    <View
      style={{
        flex: 1,
        marginTop: 140,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text
        style={{
          fontSize: 30,
          fontWeight: 'bold',
          color: text,
        }}
      >
        Score:{' '}
        <Text
          style={{
            fontSize: 30,
            fontWeight: '300',
          }}
        >
          {score}
        </Text>
      </Text>
      <Text
        style={{
          fontSize: 20,
          fontWeight: 'bold',
          color: text,
        }}
      >
        Record:{' '}
        <Text
          style={{
            fontSize: 20,
            fontWeight: '300',
          }}
        >
          {record[difficulty]}
        </Text>
      </Text>
    </View>
  )
}
