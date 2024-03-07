import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet,Animated } from 'react-native'
import React, { useState } from 'react'
import { Styles } from '../FlatListCss'
import { height, width } from '../../constants/Dimension'

function RenderItem({ item }) {

    return (
        <View key={item.id} style={style.renderContainer} >
            <TouchableOpacity activeOpacity={0.5} >
                <Image source={require('../../../assets/images/electricAuto.webp')} style={style.imageStyle} />
            </TouchableOpacity>
        </View>
    )
}

export default function BanerFlatList({ data }) {

    const scrollX = React.useRef(new Animated.Value(0)).current

    const [indexShared, setIndexShared] = useState(0)

    const onScrollEvent = (event) => {
        const offsetX = event.nativeEvent.contentOffset.x
        const index = Math.floor(offsetX / width); 
        setIndexShared(index + 1)
    }

    return (
        <View style={Styles.mainContainer} >
            <Animated.FlatList
                data={data}
                onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                    { useNativeDriver: true },
                )}
                onMomentumScrollEnd={onScrollEvent}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ paddingHorizontal: 20 }}
                keyExtractor={(item) => item.id}
                renderItem={(item) => <RenderItem item={item} />}
                horizontal
            />
            <View style={style.dotsContainer} >
                {data.map((item, index) => {
                    return (
                        <View style={{ ...style.dots, backgroundColor: index == indexShared ? 'red' : '#f1f2f6', width: index == indexShared ? 20 : 10, }} />
                    )
                })}
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    renderContainer: { width: width * .7, marginVertical: 10 },
    imageStyle: { width: width * .65, height: height * .17, resizeMode: 'cover', borderRadius: 10, alignSelf: 'center' },
    dotsContainer: { width: '100%', justifyContent: 'center', alignItems: 'center', flexDirection: 'row', marginVertical: 10 },
    dots: { height: 7, margin: 1, borderRadius: 50 }
})