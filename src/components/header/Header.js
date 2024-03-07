import { View, Text, TextInput } from 'react-native'
import React from 'react'
import { Styles } from './HeaderCss'
import MENU from "react-native-vector-icons/MaterialCommunityIcons"
import SEARCH from "react-native-vector-icons/Fontisto"
import NOTI from 'react-native-vector-icons/Ionicons'
import KeyDown from "react-native-vector-icons/MaterialIcons"
import LocationPin from "react-native-vector-icons/Entypo"

export default function Header({ title }) {
  return (
    <View style={Styles.mainContainer} >
      <View style={Styles.locationContainer} >
        <KeyDown name="location-pin" size={20} color='#FFF' />
        <View style={Styles.m2} />
        <Text style={Styles.textStyle} >{title}</Text>
        <View style={Styles.m2} />
        <KeyDown name="keyboard-arrow-down" size={20} color='#FFF' />
      </View>
      <View style={Styles.subContainer} >
        <MENU name="menu" size={30} color='#FFF' />
        <View style={Styles.textInputContainer}>
          <SEARCH name="search" size={20} color='grey' />
          <TextInput
            placeholder='Search here'
            placeholderTextColor='grey'
            style={Styles.textInputStyle}
          />
        </View>
        <NOTI name="notifications-outline" size={27} color='#FFF' />
      </View>
    </View>
  )
}