import { useTheme } from '../../hooks/useTheme'
import { Button } from '../common/Button'

export const SwitchTheme = () => {
  const { toggleTheme, theme } = useTheme()
  console.log(theme)
  return (
    <Button onPress={() => toggleTheme()} variant="primary" text="Trocar" />
  )
}
