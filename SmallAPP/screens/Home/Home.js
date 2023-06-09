/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect, useState } from 'react';
import {
    SafeAreaView,
    FlatList,
    View
} from 'react-native';
import Style from './style'
import UserDetails from '../../component/UserDetails'
import Loader from '../../component/Loader'
import { Services, APIHandler } from '../../networking'

const Home = () => {
    const [isLoader, setIsLoader] = useState(false)
    const [userList, setUserList] = useState([])

    useEffect(() => {
        getUserData()
    }, [])

    const getUserData = async () => {
        setIsLoader(true)
        try {
            const apiUrl = APIHandler.getUser
            const result = await Services.GET(apiUrl)
            setUserList(result)
            setIsLoader(false)
        } catch (error) {
            alert(error)
            setIsLoader(false)
        }
    }

    const renderItem = ({ item }) => {
        return (
            <View style={Style.cell}>
                <UserDetails item={item} />
            </View>
        )
    }

    return (
        <SafeAreaView style={Style.container}>
            <FlatList
                data={userList}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                style={Style.flatlist}
            />
            {isLoader && (<Loader />)}
        </SafeAreaView>
    );
}

export default Home;
