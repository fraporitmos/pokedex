import React from 'react'
import { Text, View } from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import NativeStack  from './src/navigation/NativeStack'

const App = () => {
  return (
    <View style={{flex:1}}>
      <NavigationContainer>
        <NativeStack />
      </NavigationContainer>
    </View>
  )
}

export default App
