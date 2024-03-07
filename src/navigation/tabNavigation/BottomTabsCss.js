import { StyleSheet } from "react-native"
import { height } from "../../components/constants/Dimension"

export const Styles = StyleSheet.create({
    textStyle: {
        fontSize: 12,
        fontFamily: 'Poppins-Regular',
        display:'none'
    },
    tabBarStyle: {
        height: height * .08,
        backgroundColor: '#FFF',
        borderColor: '#F1f2f6',
        borderWidth: 1
    },
    otherTabs: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFF',
    },
    otherTabsText:{
        color:'#FFF',
        fontFamily:'Poppins-Regular'
    }
})