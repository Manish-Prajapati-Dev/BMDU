import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Styles } from './ShopFlatlistCss'

function RenderItem({ item }) {

    return (
        <View key={item.id} style={Styles.renderContainer}>

            <Image source={require('../../../assets/images/pngImageAuto.png')} style={Styles.imageStyle} />
            <Text style={{ ...Styles.headingTitle, fontSize: 14, textAlign: 'center' }} >{item.item.title}</Text>
            <Text style={{ ...Styles.headingTitle, color: 'red', fontSize: 16, textAlign: 'center' }} >Rs. {item.item.price}/-</Text>
        </View>
    )
}

export default function ShopFlatList({ data, clickSeeAll }) {

    return (
        <View style={Styles.mainContainer} >
            <View style={Styles.heading}>
                <Text style={{ ...Styles.headingTitle, fontSize: 20, color: 'red' }} >See All</Text>
                <TouchableOpacity activeOpacity={0.5} onPress={clickSeeAll} >
                    <View style={Styles.seeAll} >
                        <Text style={{ ...Styles.seeAllText, color: 'red', fontSize: 15 }} >See all</Text>
                    </View>
                </TouchableOpacity>     
            </View>
            <FlatList
                data={data}
                contentContainerStyle={{ paddingHorizontal: 20 }}
                keyExtractor={(item) => item.id}
                renderItem={(item) => <RenderItem item={item} />}
                horizontal
            />
        </View>
    )
}