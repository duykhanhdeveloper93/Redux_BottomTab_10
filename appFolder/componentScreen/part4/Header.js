import React from "react"
import { View, ImageBackground, Text, Image } from 'react-native'

import { useSelector } from 'react-redux'

const Header = () => {

    const reduxData = useSelector(reduxSource => reduxSource).messageReducer;

    return (
        <View style={{ flex: 1 }}>
            <View >
                <ImageBackground
                    resizeMode="cover"
                    style={{ height: 190 }}
                    source={reduxData.bgImage1}>
                    <View style={{ marginVertical: 20, marginHorizontal: 18 }}>
                        <View style={{ flexDirection: 'row' }}>

                            <View style={{ flex: 2 }}>
                                <Text style={{ color: 'white', fontSize: 18, fontWeight: '600' }}>{reduxData.text_1_1}</Text>
                            </View>
                            <View style={{ flex: 2 }}>

                            </View>
                            <View style={{ justifyContent: 'space-between', flexDirection: 'row', flex: 1 }}>
                                <Image style={{}} resizeMode="contain" source={reduxData.scanIcon} />
                                <Image style={{}} resizeMode="contain" source={reduxData.searchIcon} />
                            </View>

                        </View>

                    </View>
                    <View style={{
                       
                        position: 'absolute',
                        bottom: -50,
                        left: 30,
                        backgroundColor: 'white',
                        height: 102,
                        width: 339,
                        borderRadius: 20,
                    }}>
                        <View style={{justifyContent: 'space-between',flexDirection: 'row',marginHorizontal: 18 , marginVertical: 20}}>
                            <View>
                                <Image style={{alignSelf: 'center'}} resizeMode="contain" source={reduxData.likeBigIcon} />
                                <Text style={{alignSelf: 'center'}}>{reduxData.textLikeBigIcon}</Text>
                            </View>
                            <View>
                                <Image style={{alignSelf: 'center'}} resizeMode="contain" source={reduxData.messageBigIcon} />
                                <Text style={{alignSelf: 'center'}}>{reduxData.textMessageBigIcon}</Text>
                            </View>
                            <View>
                                <Image style={{alignSelf: 'center'}} resizeMode="contain" source={reduxData.commentBigIcon} />
                                <Text style={{alignSelf: 'center'}}>{reduxData.textCommentBigIcon}</Text>
                            </View>
                            <View>
                                <Image style={{alignSelf: 'center'}} resizeMode="contain" source={reduxData.helpBigIcon} />
                                <Text style={{alignSelf: 'center'}}>{reduxData.textHelpBigIcon}</Text>
                            </View>
                        </View>

                    </View>
                </ImageBackground>
                <View style={{height: 60}}></View>
            </View>

        </View>
    )
}

export default Header