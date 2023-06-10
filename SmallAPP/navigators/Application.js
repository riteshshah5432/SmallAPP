/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect } from 'react';
import { Platform } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screens/Login/Login'
import KeyboardManager from 'react-native-keyboard-manager';
import SideMenu from './SideMenu';
import { useSelector } from "react-redux"

const Stack = createNativeStackNavigator();

const ApplicationNavigator = () => {
    let isLogin = useSelector(state => state.userStore.isLogin)
    useEffect(() => {
        if (Platform.OS == 'ios') {
            KeyboardManager.setEnable(true);
            KeyboardManager.setEnableAutoToolbar(true);
            KeyboardManager.setShouldShowToolbarPlaceholder(false);
        }
    }, [])

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={isLogin ? 'Main' : 'Login'}>
                <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
                <Stack.Screen name="Main" component={SideMenu} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default ApplicationNavigator;
