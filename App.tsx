import { MainContainer } from './src/styles/GlobalStyles'
import { TopBar } from './src/components/TopBar'
import { BottomBar } from './src/components/BottomBar'
import { Wrapper } from './Wrapper'
import { GameBox } from './src/components/GameBox'
import { Score } from './src/components/Score'
import { Difficult } from './src/components/Difficult'

export default function App() {
  return (
    <Wrapper>
      <MainContainer>
        <TopBar />
        <Score />
        <GameBox />
        <Difficult />
        <BottomBar />
      </MainContainer>
    </Wrapper>
  )
}
