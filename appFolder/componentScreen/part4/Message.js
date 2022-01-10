import React from "react"
import { FlatList, View, Image, Text } from "react-native"
import { useSelector } from 'react-redux'
import Header from "./Header"



const Message = () => {

    const reduxData = useSelector(reduxSource => reduxSource).messageReducer;

    const renderItemFlBody = ({ item, index }) => {
        return (
            <View style={{ marginHorizontal: 18, marginVertical: 10, flexDirection: 'row', flex: 1 }}>
                <View style={{ flex: 3, flexDirection: 'row' }}>
                    <Image resizeMode="cover" style={{ height: 44, width: 44 }} source={item.avatarImg} ></Image>
                    <View style={{ alignSelf: 'center', marginLeft: 10 }}>
                        <View style={{ flexDirection: 'row' }}>
                            <Text>{item.name}</Text>
                            <View style={{marginLeft: 5}}>
                                {
                                    item.imageSubName ? (
                                        <View>
                                            <Image resizeMode="contain" source={item.imageSubName}>

                                            </Image>
                                        </View>
                                    ) : ( <View></View>)


                                }
                            </View>

                        </View>

                        <Text numberOfLines={2} >{item.content1}</Text>
                    </View>
                </View>

                <View style={{ marginLeft: 10 }}>
                    <Text>{item.time}</Text>
                </View>

            </View>
        )
    }

    return (
        <View style={{ flex: 1 }}>
            <FlatList

                data={reduxData.flatListData}
                renderItem={renderItemFlBody}
                ListHeaderComponent={Header}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
            />

        </View>
    )


}

export default Message