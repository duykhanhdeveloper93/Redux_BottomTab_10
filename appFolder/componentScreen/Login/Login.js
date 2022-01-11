import React from "react"
import { View, Image, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import ScrollViewCommands from "react-native/Libraries/Components/ScrollView/ScrollViewCommands";

import { useSelector } from 'react-redux'

const Login = () => {

    const reduxData = useSelector(reduxSource => reduxSource).loginReducer;

    return (
        
            <View style={{ flex: 1, marginHorizontal: 18 }}>

                <View style={{ flex: 3 }}>
                    <View style={{ flex: 1 }} />
                    <View style={{ flex: 3 }}>
                        <Image resizeMode="contain" source={reduxData.image1} style={{ alignSelf: 'center' }} />
                    </View>
                    <View style={{ flex: 1 }}>
                        <Image resizeMode="contain" source={reduxData.image2} style={{ alignSelf: 'center' }} />
                    </View>
                </View>
                <View style={{ flex: 4 }}>

                    <View>

                        <TextInput placeholder="Email" style={{ borderWidth: 0.4, paddingHorizontal: 15 }}>

                        </TextInput>


                    </View>
                    <View style={{ marginTop: 22 , borderWidth: 0.4, flexDirection: 'row', paddingHorizontal: 10}}>
                        <TextInput placeholder="Password" style={{ flex : 1  }}>

                        </TextInput>
                        <Image resizeMode="contain" source={reduxData.eyeOffImage} style={{ alignSelf: 'center'}} />
                        
                    </View>
                    <View style={{ marginTop: 22 }}>
                        <TouchableOpacity style={{ backgroundColor: '#1E57F1', padding: 18 }}>
                            <Text style={{ color: 'white', alignSelf: 'center' }}>Login</Text>
                        </TouchableOpacity>

                    </View>
                    <View style={{ marginTop: 22, alignItems: 'center' }}>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ color: 'black', alignSelf: 'center' }}>New to sally? </Text>
                            <Text style={{ color: 'red', alignSelf: 'center' }}>Sign up</Text>
                        </View>

                    </View>

                </View>

            </View>
        
    )

}

export default Login