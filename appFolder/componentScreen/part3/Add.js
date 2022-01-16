import React, { useEffect }  from "react"
import { Text, TouchableOpacity, View } from "react-native"
import AsyncStorage from '@react-native-async-storage/async-storage';

const Add = () => {

    const saveData = async (value) => {
        AsyncStorage.clear()
        try {
            await AsyncStorage.setItem("IS_LOGIN", value)
            console.log('Data successfully saved')
        } catch (e) {
            console.log('Failed to save the data to the storage')
        }
    }

    const onPressLogOut = () => {
       saveData('false');
    }
    return (
        <View>
            <TouchableOpacity onPress={onPressLogOut}
             style={{backgroundColor: 'orange' , padding: 20, alignItems: 'center'}}>
                <Text>LogOut</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Add