import React from "react"
import { View, ImageBackground, Text } from 'react-native'

import { useSelector } from 'react-redux'

const Header = () => {

    const reduxData = useSelector(reduxSource => reduxSource).messageReducer;

    return (
        <View style={{ flex: 1}}>
            <View >
                <ImageBackground
                    resizeMode="contain"
                    style={{ height: 200 }}
                    source={reduxData.bgImage1}>
                    <View style={{ marginVertical: 20, marginHorizontal: 18}}>
                        <View style={{flexDirection: 'row'}}>
                            <Text style={{color: 'white', fontSize: 18, fontWeight: '600'}}>{reduxData.text_1_1}</Text>
                        </View>

                    </View>
                </ImageBackground>

            </View>

        </View>
    )
}

export default Header