import React from 'react'
import Home from '../screens/Home/Home'
import AddUser from '../screens/AddUser/AddUser'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
const Stack = createNativeStackNavigator()

const HomeStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name='Home' component={Home} />
            <Stack.Screen name='AddUser' component={AddUser} />
        </Stack.Navigator>
    )
}

export default HomeStack