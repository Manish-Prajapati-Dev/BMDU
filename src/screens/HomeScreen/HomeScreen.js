import { View, StatusBar, ScrollView, ActivityIndicator, RefreshControl, Text, Image } from 'react-native'
import React from 'react'
import Header from '../../components/header/Header'
import FlatListCom from '../../components/flatList/FlatListCom'
import { Styles } from './HomeScreenCss'
import { serviceData } from '../../components/constants/ServiceData'
import { categoryData } from '../../components/constants/CategoryData'
import BanerFlatList from '../../components/flatList/BanerFlatList/BanerFlatList'
import { height, width } from '../../components/constants/Dimension'
import RelatedFlatlist from '../../components/flatList/RelatedFlatList/RelatedFlatList'
import { relatedData } from '../../components/constants/RelatedData'
import ShopFlatlist from '../../components/flatList/ShopFlatList/ShopFlatlist'



export default function HomeScreen({ navigation }) {

    const [loading, setLoading] = React.useState(true)
    const [data, setData] = React.useState([])
    const [refreshing, setRefreshing] = React.useState(false);

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        apiCall()
        setTimeout(() => {
            setRefreshing(false);
        }, 1000);
    }, [])

    const apiCall = async () => {
        try {
            const res = await fetch("https://dummyjson.com/products")
            if (res) {
                let response = await res.json()
                setData((response.products))
                setLoading(false)
            }
            else {
                console.log("Error in api", res)
            }
        }
        catch (e) {
            console.log(e)
        }
    }

    React.useEffect(() => {
        apiCall()
    }, [])

    return (
        <View style={Styles.mainContainer} >
            <StatusBar translucent backgroundColor={'red'} />
            <Header title="Noida sector 2" />
            {loading ?
                <ActivityIndicator style={Styles.indicatorStyle} />
                :
                <ScrollView
                    refreshControl={
                        <RefreshControl refreshing={refreshing} onRefresh={onRefresh}
                        />}
                >
                    <BanerFlatList
                        data={serviceData}
                    />
                    <FlatListCom
                        data={serviceData}
                    />
                    <FlatListCom
                        data={categoryData}
                        heading="Category"
                    />
                    <Image
                        style={{ width: width, height: height * .25 }}
                        source={require('../../assets/images/baner1.jpg')}
                    />
                    <RelatedFlatlist
                        data={relatedData}
                        heading="Category"
                    />
                    <Image
                        style={{ width: width, height: height * .25 }}
                        source={require('../../assets/images/travelAuto.jpg')}
                    />
                    <ShopFlatlist
                        data={relatedData}
                        heading="Category"
                    />
                </ScrollView>
            }
        </View>
    )
}