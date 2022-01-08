import React from "react"
import { View, Image, Text, TextInput, ImageBackground, FlatList } from "react-native"
import { useSelector } from 'react-redux'


const Home = () => {

    const reduxData = useSelector(reduxSource => reduxSource).homeReducer;
    const Header = () => {
        return (
            <View style={{ marginHorizontal: 18, marginVertical: 10, flex: 1 }}>
                <View style={{ flexDirection: 'row', flex: 1, height: 36 }}>
                    <View style={{ flex: 1 }}>

                    </View>
                    <View style={{ flex: 1 }}>
                        <Text style={{ fontWeight: '500', color: 'black', fontSize: 17, alignSelf: 'center' }}>
                            {reduxData.textSelect}
                        </Text>
                        <Image style={{ alignSelf: 'center' }} resizeMode="contain" source={reduxData.image2} />
                    </View>
                    <View style={{ flex: 1 }}>
                        <Text style={{ fontSize: 17, color: 'gray', fontWeight: '500' }}>
                            {reduxData.textDiscover}
                        </Text>
                    </View>
                    <View style={{ flex: 1 }}>
                        <Image style={{ alignSelf: 'flex-end' }} resizeMode="contain" source={reduxData.ringImg} />
                    </View>


                </View>
                <View style={{ flexDirection: 'row', flex: 1, marginTop : 20 }}>
                    <View style={{ flex: 1, backgroundColor: '#FAFAFA', height: 36, flexDirection: 'row', borderRadius: 15 }}>
                        <Image style={{ alignSelf: 'center', flex: 1 }} resizeMode="contain" source={reduxData.searchIcon} />
                        <TextInput placeholder={reduxData.placeHolderText1} style={{ fontSize: 15, color: 'black', flex: 6 }} />
                        <Image style={{ alignSelf: 'center', flex: 1 }} resizeMode="contain" source={reduxData.recordIcon} />
                    </View>
                </View>
                <View style={{ flexDirection: 'row', flex: 1, marginTop: 20 }}>

                    <Image style={{ alignSelf: 'center', flex: 1 }} resizeMode="contain" source={reduxData.rankingIcon} />
                    <Image style={{ alignSelf: 'center', flex: 1 }} resizeMode="contain" source={reduxData.discussIcon} />
                    <Image style={{ alignSelf: 'center', flex: 1 }} resizeMode="contain" source={reduxData.surroundingIcon} />


                </View>
                <View style={{ flex: 1, marginTop: 10 }}>
                    <ImageBackground resizeMode="cover" source={reduxData.backGroundImgLine1} style={{ width: '100%', height: 190 }}>

                    </ImageBackground>


                </View>

            </View>
        )

    }

    const renderItem = ({ item, index }) => {
        return (
            <View style={{ marginHorizontal: 18 , paddingVertical: 10}}>
                <View style={{ flexDirection: 'row', paddingVertical: 10 }}>
                    <View style={{ flexDirection: 'row' }}>
                        <Image style={{ height: 30, width: 30 }} resizeMode="cover" source={item.avatarImg} />
                        <Text style={{ alignSelf: 'center', marginLeft: 8, color: 'black', fontWeight: '400', fontSize: 16 }}>
                            {item.name}
                        </Text>
                    </View>
                    <View style={{ flex: 1 }}>

                    </View>

                    <Text style={{
                        justifyContent: 'center',
                        backgroundColor: '#FA6650',
                        height: 28,
                        width: 70,
                        textAlign: 'center',
                        borderRadius: 5,
                        color: 'white',
                        textAlignVertical: 'center',
                    }}>Follow</Text>
                </View>
                <View style={{ flexDirection: 'row', paddingVertical: 10}}>
                    <Text style={{
                        flex: 4,
                        fontWeight: '400',
                        color: 'black',
                        textAlignVertical: 'center',
                        fontSize: 15
                    }}>{item.content1}</Text>
                    <View style={{flex: 1}}>

                    </View>
                </View>
                <View style={{paddingTop: 10}}>
                    {
                        item.img2 ?
                            (
                                <View>
                                    <View style={{flexDirection: 'row', flex: 1}}>
                                        <Image style={{width: 109, height: 109,  flex: 1,borderRadius: 8}} resizeMode="cover" source={item.img1} />
                                        <Image style={{width: 109, height: 109, marginLeft: 10, flex: 1,borderRadius: 8}} resizeMode="cover" source={item.img2} />
                                        <Image style={{width: 109, height: 109, marginLeft: 10, flex: 1,borderRadius: 8}} resizeMode="cover" source={item.img3} />
                                    </View>
                                    <View style={{flexDirection: 'row', flex: 1 ,marginTop : 10}}>
                                        <Image style={{width: 109, height: 109, flex: 1,borderRadius: 8}} resizeMode="cover" source={item.img4} />
                                        <Image style={{width: 109, height: 109, marginLeft: 10, flex: 1,borderRadius: 8}} resizeMode="cover" source={item.img5} />
                                        <Image style={{width: 109, height: 109, marginLeft: 10, flex: 1,borderRadius: 8}} resizeMode="cover" source={item.img6} />
                                    </View>

                                </View>
                                
                            ) :
                            (
                                <View>
                                    <Image style={{ width: '100%', borderRadius: 8 }} resizeMode="cover" source={item.img1} />
                                </View>
                            )
                    }

                </View>
                <View style={{ flexDirection: 'row', marginTop: 10 }}>
                    <View style={{ flexDirection: 'row', flex: 2 }}>
                        <Image style={{alignSelf: 'center'}} resizeMode="contain" source={item.icon1} />
                        <Text style={{
                            alignSelf: 'center',
                            flex: 4,
                            fontWeight: '400',
                            color: 'black',
                            textAlignVertical: 'center',
                            fontSize: 15
                        }}>{item.numberLike}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', flex: 2 }}>
                        <Image style={{alignSelf: 'center'}} resizeMode="contain" source={item.icon2} />
                        <Text style={{
                            alignSelf: 'center',
                            flex: 4,
                            fontWeight: '400',
                            color: 'black',
                            textAlignVertical: 'center',
                            fontSize: 15
                        }}>{item.numberLike}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', flex: 2 }}>
                        <Image style={{alignSelf: 'center'}} resizeMode="contain" source={item.icon3} />
                        <Text style={{
                            alignSelf: 'center',
                            flex: 4,
                            fontWeight: '400',
                            color: 'black',
                            textAlignVertical: 'center',
                            fontSize: 15
                        }}>{item.numberLike}</Text>
                    </View>
                    <View style={{ flex: 4 }}>
                       
                    </View>

                </View>
                <View>
                    {
                    item.img2 ?
                        (
                            <View>
                                <View style={{ flexDirection: 'row', flex: 1, marginTop: 10 }}>
                                    <Image style={{  flex: 1, borderRadius: 8 }} resizeMode="cover" source={item.img7} />
                                    <Image style={{  flex: 1, borderRadius: 8, marginLeft: 10 }} resizeMode="cover" source={item.img8} />
                                    
                                </View>
                                
                            </View>

                        ) : (<View />)
                    }
                </View>

            </View>
        )
    }


    return (
        <View>
            <FlatList data={reduxData.flatListData}
                renderItem={renderItem}
                ListHeaderComponent={Header}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
            />
        </View>
    )
}

export default Home