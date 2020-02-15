import React, { useState, useCallback } from 'react'
import { Text } from 'react-native'
import { ButtonGroup } from 'react-native-elements'
import styled from 'styled-components'
import map from 'lodash/fp/map'

const Button = ({ text }) => <Text>{text}</Text>

const StyledButtonGroup = styled(ButtonGroup)`
  width: 100%;
`

const BottomBar = () => {
  const [selectedIndex, setSelectedIndex] = useState(undefined)

  const updateIndex = useCallback(
    selectedIndex => setSelectedIndex(selectedIndex), [setSelectedIndex]
  )

  const buttons = ['Manger', 'Jouer', 'Dormir']
  return (
    <StyledButtonGroup
      onPress={updateIndex}
      selectedIndex={selectedIndex}
      buttons={
        map(button => <Button text={button}/>, buttons)
      }
      containerStyle={{height: 50}} />
  )
}

export default BottomBar
