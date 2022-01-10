import React from "react"
import { FlatList, Text, View } from "react-native"
import { useSelector } from 'react-redux'

const Cosmos = () => {
    const reduxData = useSelector(reduxSource => reduxSource).cosmosReducer;
    const renderItemFlatListBody = ({ item, index }) => {

    }
    const Header = () => {

    }

    const Bottom = () => {

    }


    return (
        <View>
            <FlatList
            
            >

            </FlatList>

        </View>
    )
}

export default Cosmos