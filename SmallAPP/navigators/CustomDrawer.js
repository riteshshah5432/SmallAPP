import React from 'react';
import {
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem
} from '@react-navigation/drawer';
import { useDispatch, useSelector } from "react-redux"
import { setIsUserLogin } from "../store/UserStore"

const CustomDrawerContent = (props) => {
    const dispatch = useDispatch()

    return (
        <DrawerContentScrollView {...props}>
            <DrawerItemList {...props} />
            <DrawerItem
                label="Log out"
                onPress={() => {
                    dispatch(setIsUserLogin({ isLogin: false }))
                    props.navigation.reset({
                        index: 0,
                        routes: [{ name: 'Login' }]
                    })
                }}
            />
        </DrawerContentScrollView>
    )
}

export default CustomDrawerContent