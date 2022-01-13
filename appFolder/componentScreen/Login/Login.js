import React, { useEffect } from "react"
import { View, Image, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

const Login = ({ navigation }) => {

    // Define useState
    const [email, setEmail] = useState('');
    const [passWord, setPassWord] = useState('');

    const [isLogin, setIsLogin] = useState(0)

    const reduxData = useSelector(reduxSource => reduxSource).loginReducer;
    const reduxDataHome = useSelector(x => x.homeReducer);

    const actionLogin = () => {
        saveData();
        if(email == "abcd") {
            navigation.navigate('body');
        }
    }

    const saveData = async () => {
        AsyncStorage.clear()
        try {
            await AsyncStorage.setItem("EMAIL_DATA_SAVE", email)
            console.log(email)
            alert('Data successfully saved')
        } catch (e) {
            alert('Failed to save the data to the storage')
        }
    }
    const readData = async () => {
        try {
            const emailData = await AsyncStorage.getItem("EMAIL_DATA_SAVE")

            if (emailData !== null) {
                console.log(emailData)
                setEmail(emailData)

            }
            if(email == "abcd") {
                navigation.navigation('body');
            }
        } catch (e) {
            alert('Failed to fetch the data from storage')
        }
    }
    useEffect(() => {
        readData();

    }, [])

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

                    <TextInput placeholder="Email" style={{ borderWidth: 0.4, paddingHorizontal: 15 }} value={email} onChangeText={(value) => { setEmail(value) }} >

                    </TextInput>


                </View>
                <View style={{ marginTop: 22, borderWidth: 0.4, flexDirection: 'row', paddingHorizontal: 10 }}>
                    <TextInput placeholder="Password" style={{ flex: 1 }} value={passWord} onChangeText={(value) => { setPassWord(value) }}>

                    </TextInput>
                    <Image resizeMode="contain" source={reduxData.eyeOffImage} style={{ alignSelf: 'center' }} />

                </View>
                <View style={{ marginTop: 22 }}>
                    <TouchableOpacity onPress={actionLogin}
                        style={{ backgroundColor: '#1E57F1', padding: 18 }}>
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