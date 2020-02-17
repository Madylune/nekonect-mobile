import React, { useState, useCallback } from 'react'
import { Text } from 'react-native'
import { ButtonGroup } from 'react-native-elements'
import styled from 'styled-components'
import map from 'lodash/fp/map'
import get from 'lodash/fp/get'
import { SERVER_URL } from '../api/server'

const io = require('socket.io-client')
const socket = io(SERVER_URL)

const BUTTONS = [
  {
    title: 'Manger',
    action: 'eat'
  },
  {
    title: 'Jouer',
    action: 'play'
  },
  { 
    title: 'Dormir',
    action: 'sleep'
  }
]

const Button = ({ text }) => <Text>{text}</Text>

const StyledButtonGroup = styled(ButtonGroup)`
  width: 100%;
`

const BottomBar = () => {
  const [selectedIndex, setSelectedIndex] = useState(undefined)

  const updateIndex = useCallback(
    selectedIndex => {
      setSelectedIndex(selectedIndex), [setSelectedIndex]
      socket.emit(get([selectedIndex, 'action'], BUTTONS))
    }
  )

  return (
    <StyledButtonGroup
      onPress={updateIndex}
      selectedIndex={selectedIndex}
      buttons={
        map(button => <Button text={button.title}/>, BUTTONS)
      }
      containerStyle={{height: 50}} />
  )
}

export default BottomBar
