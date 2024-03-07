import React from 'react'
import { View } from 'react-native'
import BottomTabs from './src/navigation/tabNavigation/BottomTabs'

export default function App() {
  return (
    <View style={{flex:1}} >
      <BottomTabs/>
    </View>
  )
}