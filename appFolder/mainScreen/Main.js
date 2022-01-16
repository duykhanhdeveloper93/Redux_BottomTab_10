import React, { useEffect } from 'react';
import { AppRegistry, Image, View } from 'react-native';
import { name as appName } from './app.json';
import Home from '../componentScreen/Home';
import Cosmos from '../componentScreen/part2/Cosmos';
import Add from '../componentScreen/part3/Add';
import User from '../componentScreen/part5/User';
import Message from '../componentScreen/part4/Message';
import Login from '../componentScreen/Login/Login'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { useSelector } from 'react-redux'
import { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();



function Body() {
    const homeDataRedux = useSelector(reduxSource => reduxSource).homeReducer;
    const cosmosDataRedux = useSelector(reduxSource => reduxSource).cosmosReducer;
    const messageDataRedux = useSelector(reduxSource => reduxSource).messageReducer;
    const reduxDataLogin = useSelector(reduxSource => reduxSource).loginReducer;

    return (
        <Tab.Navigator>
            <Tab.Screen name='Home' component={Home} options={{
                headerShown: false, tabBarIcon: ({ focused, color, size } ) => {
                    if (focused)
                        return (
                            <Image source={require('../sourceData/image/part1/homeSelect/icon.png')} />
                        )
                    else return (
                        <Image source={require('../sourceData/image/part1/home/icon.png')} />
                    )
                },
                tabBarActiveTintColor: 'tomato',
                tabBarInactiveTintColor: 'gray',
            }} />
            <Tab.Screen name="Cosmos" component={Cosmos} options={{
                headerShown: false, tabBarIcon: ({ focused, color, size }) => {
                    if (focused)
                        return (
                            <Image source={cosmosDataRedux.bottom2_Select} />
                        )
                    else return (
                        <Image source={cosmosDataRedux.bottom2} />
                    )
                },
                tabBarActiveTintColor: 'tomato',
                tabBarInactiveTintColor: 'gray'
            }} />
            <Tab.Screen name="Add" component={Add} options={{
                headerShown: false, tabBarIcon: ({ focused, color, size }) => {
                    if (focused)
                        return (
                            <Image source={require('../sourceData/image/part1/homeSelect/icon.png')} />
                        )
                    else return (
                        <Image source={cosmosDataRedux.bottom2} />
                    )
                },
                tabBarActiveTintColor: 'tomato',
                tabBarInactiveTintColor: 'gray'
            }} />
            <Tab.Screen name='Message' component={Message} options={{
                headerShown: false, tabBarIcon: ({ focused, color, size }) => {
                    if (focused) {
                        return (
                            <Image source={messageDataRedux.headerSelectIcon} />
                        )
                    } else {
                        return (
                            <Image source={messageDataRedux.headerNoSelectIcon} />
                        )
                    }

                }
            }} />
            <Tab.Screen name='User' component={User} options={{
                headerShown: false, tabBarIcon: ({ focused, color, size }) => {
                    if (focused) {
                        return (
                            <Image source={require('../sourceData/image/part1/homeSelect/icon.png')} />
                        )
                    } else {
                        return (
                            <Image source={cosmosDataRedux.bottom2} />
                        )
                    }

                }
            }} />

        </Tab.Navigator>
    );
}

const LoginNav = () => {
    return (
        <Stack.Navigator >
            <Stack.Screen name='login'
                component={Login}
                options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}

const HomeNav = () => {
    return (
        <Stack.Navigator >
            <Stack.Screen name='body'
                component={Body}
                options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}

const Main = () => {


    const readData = async () => {
        try {
            const is_login = await AsyncStorage.getItem("IS_LOGIN");
            
            if(is_login == 'true') {
                console.log('OK');
                setIsLogin(1);
            } else {
                setIsLogin(0);
            }
            
        } catch (e) {
            console.log('Main ko lay dc data local')
        }
    }

    useEffect(() => {
        readData();
    })
    
    const [isLogin, setIsLogin] = useState(0);

    return (
        <NavigationContainer>
            {
                isLogin == 1 ? (
                    <HomeNav />
                ) : (
                    <LoginNav />
                )
            }
        </NavigationContainer>
    );
}

export default Main;