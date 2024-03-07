import { StyleSheet } from "react-native"
import { height, width } from '../constants/Dimension'

export const Styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: '#FFF',
    },
    heading: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 0,
        paddingHorizontal: '8%'
    },
    seeAll: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    seeAllText: {
        color: '#000',
        fontSize: 12,
        fontFamily: 'Popping-Regular'
    },
    headingTitle: {
        color: '#000',
        fontSize: 20,
        fontFamily: 'Poppins-Regular',
        marginTop: 8,
        fontWeight: '700',
        textTransform: 'capitalize'
    },
    componentStyle: {
        padding: 5,
        marginLeft: 5,
    },
    componentText: {
        color: '#000',
        fontFamily: 'Poppins-Regular',
        marginVertical: 4
    },
    brandingText: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    imageStyle: { width: width * .2, height: height * .08, resizeMode: 'center', }
})