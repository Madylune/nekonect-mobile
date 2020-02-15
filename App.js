import React from 'react'
import { View, ImageBackground, Image } from 'react-native'
import styled from 'styled-components'
import Topbar from './components/Topbar'
import BottomBar from './components/BottomBar'

const StyledView = styled(View)``

const StyledBackground = styled(ImageBackground)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const StyledNeko = styled(Image)`
  height: 200px;
  width: 150px;
  position: absolute;
  top: 50%;
  left: 25%;
`

export default function App() {
  return (
    <StyledView>     
      <StyledBackground source={require('./assets/home.jpg')}>
        <Topbar />
        <StyledNeko source={require('./assets/neko.png')}/>
        <BottomBar />
      </StyledBackground>
    </StyledView>
  )
}
