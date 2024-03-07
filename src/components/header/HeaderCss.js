import { StyleSheet, StatusBar } from "react-native"
import { height, width } from "../constants/Dimension"

export const Styles = StyleSheet.create({
    mainContainer: {
        justifyContent: 'center',
        backgroundColor: 'red',
        width: width,
        height: height*.18,
        paddingTop:20,
        position: 'relative',
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25
    },
    m2: {
        marginHorizontal: 2
    },
    textStyle: {
        color: '#FFF',
        fontSize: 16,
        fontFamily: 'Poppins-Regular',
        textTransform: 'capitalize'
    },
    locationContainer: {
        paddingHorizontal: '5%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginVertical: '4%'
    },
    subContainer: {
        flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: '5%'
    },
    textInputContainer: {
        flexDirection: 'row',
        backgroundColor: '#FFF',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingHorizontal: 10,
        borderRadius: 7,
        width: '75%',
    },
    textInputStyle: {
        backgroundColor: '#FFF',
        paddingVertical: 2,
        color: '#000',
        height: height * .04,
    }
})