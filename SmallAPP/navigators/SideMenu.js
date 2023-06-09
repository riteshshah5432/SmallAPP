import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
const Drawer = createDrawerNavigator();
import Home from '../screens/Home/Home';
import AboutUs from '../screens/AboutUs/AboutUs';
import ContactUs from '../screens/ContactUs/ContactUs';

const SideMenu = () => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Home" component={Home} />
            <Drawer.Screen name="AboutUs" component={AboutUs} />
            <Drawer.Screen name="ContactUs" component={ContactUs} />
        </Drawer.Navigator>
    )
}

export default SideMenu