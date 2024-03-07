import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Styles } from './FlatListCss'

function RenderItem({ item }) {

    return (
        <View key={item.id} style={Styles.componentStyle} >
            <TouchableOpacity activeOpacity={0.5} style={{ backgroundColor: '#f1f2f6', padding: 10, borderRadius: 10 }} >
                <Image source={require('../../assets/images/car.png')} style={Styles.imageStyle} />
            </TouchableOpacity>
            <View style={Styles.brandingText}>
                <Text style={Styles.componentText} >{item.item.title}
                </Text>
            </View>
        </View>
    )
}

export default function FlatListCom({ data, clickSeeAll, heading, SeeAll }) {

    return (
        <View style={Styles.mainContainer} >
            {heading &&
                <View style={Styles.heading}>
                    <Text style={Styles.headingTitle} >{heading}</Text>
                    {SeeAll &&
                        <TouchableOpacity activeOpacity={0.5} onPress={clickSeeAll} >
                            <View style={Styles.seeAll} >
                                <Text style={Styles.seeAllText} >See all</Text>
                            </View>
                        </TouchableOpacity>}
                </View>}
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