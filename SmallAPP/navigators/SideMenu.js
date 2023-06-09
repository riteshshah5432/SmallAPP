import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
const Drawer = createDrawerNavigator();
import Home from '../screens/Home/Home';
import AboutUs from '../screens/AboutUs/AboutUs';
import ContactUs from '../screens/ContactUs/ContactUs';
import HomeStack from './HomeStack'

const SideMenu = () => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Main" component={HomeStack} options={{ headerShown: false }} />
            <Drawer.Screen name="AboutUs" component={AboutUs} />
            <Drawer.Screen name="ContactUs" component={ContactUs} />
        </Drawer.Navigator>
    )
}

export default SideMenu