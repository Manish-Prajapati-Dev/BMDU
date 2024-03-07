import { View, Text, Button } from "react-native"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Styles } from "./BottomTabsCss";
import HomeScreen from "../../screens/HomeScreen/HomeScreen";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Wishlist from "react-native-vector-icons/AntDesign"
import Cart from "react-native-vector-icons/Ionicons"
import Home from "react-native-vector-icons/Feather"
import Note from "react-native-vector-icons/FontAwesome"
import User from 'react-native-vector-icons/EvilIcons'

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function BottomTabs() {

  function TVShows({navigation}) {
    return (
      <View style={Styles.otherTabs} >
        <Text style={Styles.otherTabsText} >TV Shows Screen</Text>
        <Button title="Go Home" onPress={() => navigation.navigate('Home')} />
      </View>
    )
  }


  function Celebrities({navigation}) {
    return (
      <View style={Styles.otherTabs} >
        <Text style={Styles.otherTabsText}>Celebrities Screen</Text>
        <Button title="Go Home" onPress={() => navigation.navigate('Home')} />
      </View>
    )
  }


  function Search({navigation}) {
    return (
      <View style={Styles.otherTabs} >
        <Text style={Styles.otherTabsText}>Search Screen</Text>
        <Button title="Go Home" onPress={() => navigation.navigate('Home')} />
      </View>
    )
  }



  function TMDB({navigation}) {
    return (
      <View style={Styles.otherTabs} >
        <Text style={Styles.otherTabsText}>TMDB Screen</Text>
        <Button title="Go Home" onPress={() => navigation.navigate('Home')} />
      </View>
    )
  }

  function HomeStack() {
    return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    )
  }

  return (
    <NavigationContainer>
      <Tab.Navigator
        inactiveColor="##FFF"
        activeColor="red"
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
          tabBarStyle: Styles.tabBarStyle}}
        shifting={false}>
        <Tab.Screen
          options={() => ({
            tabBarLabel: ({ color }) => <Text style={{...Styles.textStyle,color:color}}></Text>,
            tabBarIcon: ({ color }) => <Wishlist name="hearto" size={25} color={color} />,
          })}
          name="Celebrities" component={Celebrities}
        />
        <Tab.Screen
          options={() => ({
            tabBarLabel: ({ color }) => <Text style={{...Styles.textStyle,color:color}} ></Text>,
            tabBarIcon: ({ color }) => <Cart name="cart-outline" size={30} color={color} />,
          })}
          name="TvShows" component={TVShows}
        />
        <Tab.Screen
          options={() => ({
            tabBarLabel: ({ color }) => <Text style={{...Styles.textStyle,color:color}} ></Text>,
            tabBarIcon: ({ color }) =><View style={{backgroundColor:'red',padding:10,borderRadius:100,position:'absolute',bottom:30,zIndex:999}} ><Home name="home" size={25} color={'#FFF'} /></View>,
          })}
          name="Home" component={HomeStack}
        />
        <Tab.Screen
          options={() => ({
            tabBarLabel: ({ color }) => <Text style={{...Styles.textStyle,color:color}} ></Text>,
            tabBarIcon: ({ color }) => <Note name="sticky-note-o" size={25} color={color} />,
          })}
          name="Search" component={Search}
        />
        <Tab.Screen
          options={() => ({
            tabBarLabel: ({ color }) => <Text style={{...Styles.textStyle,color:color}} ></Text>,
            tabBarIcon: ({ color }) => <User name="user" size={30} color={color} />,
          })}
          name="TMDB" component={TMDB}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

