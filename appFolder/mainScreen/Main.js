import React from 'react';
import { AppRegistry, Image, View } from 'react-native';
import { name as appName } from './app.json';
import Home from '../componentScreen/Home';
import Cosmos from '../componentScreen/part2/Cosmos';
import Add from '../componentScreen/Add';
import User from '../componentScreen/User';
import Message from '../componentScreen/part4/Message';
import Login from '../componentScreen/Login/Login'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { useSelector } from 'react-redux'

const Stack = createNativeStackNavigator();
const Tab   = createBottomTabNavigator();


function LoginTab () {
    return (
        <Stack.Navigator>
            <Stack.Screen name='Login' component={Login}  options={{headerShown: false}}/>
        </Stack.Navigator>
    )

}

function MyTabs() {
    const homeDataRedux = useSelector(reduxSource => reduxSource).homeReducer;
    const cosmosDataRedux = useSelector(reduxSource => reduxSource).cosmosReducer;

    return (
        <Tab.Navigator>
            <Tab.Screen name='Home' component={Home} options={{
                headerShown: false, tabBarIcon: ({ focused, color, size }) => {
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
                            <Image source={require('../sourceData/image/part1/homeSelect/icon.png')} />
                        )
                    } else {
                        return (
                            <Image source={cosmosDataRedux.bottom2} />
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
const Main = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='login'>
                <Stack.Screen name='login'
                        component={LoginTab}
                        options={{ headerShown: false }} />
                <Stack.Screen name='home'
                    component={MyTabs}
                    options={{ headerShown: false }} />
                    
            </Stack.Navigator>
            
        </NavigationContainer>
    );
}

export default Main;