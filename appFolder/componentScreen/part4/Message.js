import React from "react"
import { FlatList, View } from "react-native"
import { useSelector } from 'react-redux'
import Header from "./Header"



const Message = () => {

    const reduxData = useSelector(reduxSource => reduxSource).messageReducer;

    const renderItemFlBody = ({ item, index }) => {
        return (
            <View>

            </View>
        )
    }

    return (
        <View>
            <FlatList
                data={reduxData.flatListBodyData}
                renderItem={renderItemFlBody}
                ListHeaderComponent={Header}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
            />

        </View>
    )


}

export default Message