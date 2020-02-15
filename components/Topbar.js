import React from 'react'
import { Header } from 'react-native-elements'

const Topbar = () => (
    <Header
      leftComponent={{ icon: 'menu', color: '#fff' }}
      centerComponent={{ text: 'NEKONECT', style: { color: '#fff', fontWeight: '800' } }}
      rightComponent={{ icon: 'settings', color: '#fff' }}
      containerStyle={{
        backgroundColor: '#B3A99E',
        justifyContent: 'space-around',
      }}
    />
)

export default Topbar
