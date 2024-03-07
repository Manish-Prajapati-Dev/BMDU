import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Styles } from './RelatedCss'
import Star from "react-native-vector-icons/AntDesign"

function RenderItem({ item }) {

    return (
        <View key={item.id} style={Styles.renderContainer}>
            <View style={Styles.rating}>
            <Text style={{ ...Styles.headingTitle, color: 'red', fontSize: 13, textAlign: 'right', marginBottom:6,marginRight:3}} >{item.item.rating}</Text>
            <Star name="star" size={13} color="red" />
            <Star name="star" size={13} color="red" />
            <Star name="star" size={13} color="red" />
            </View>
            <Image source={require('../../../assets/images/pngImageAuto.png')} style={Styles.imageStyle} />
            <Text style={{ ...Styles.headingTitle, fontSize: 14, textAlign: 'center' }} >{item.item.title}</Text>
            <Text style={{ ...Styles.headingTitle, color: 'red', fontSize: 16, textAlign: 'center' }} >{item.item.price} Lakh</Text>
        </View>
    )
}

export default function RelatedFlatlist({ data }) {

    return (
        <View style={Styles.mainContainer} >
            <View style={Styles.heading}>
                <Text style={{ ...Styles.headingTitle, color: 'red' }} >Related Product</Text>
            </View>
            <FlatList
                numColumns={2}
                data={data}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ flexWrap: 'wrap', alignSelf: 'center' }}
                keyExtractor={(item) => item.id}
                renderItem={(item) => <RenderItem item={item} />}
            />
        </View>
    )
}