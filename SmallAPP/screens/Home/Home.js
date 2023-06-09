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
import PrimaryButton from '../../component/PrimaryButton'
import { Services, APIHandler } from '../../networking'

const Home = (props) => {
    const [isLoader, setIsLoader] = useState(false)
    const [userList, setUserList] = useState([])

    useEffect(() => {
        getUserData()
    }, [])

    const renderItem = ({ item }) => {
        return (
            <View style={Style.cell}>
                <UserDetails item={item} />
            </View>
        )
    }

    const goBack = () => {
        getUserData()
    }

    const onPressAdd = () => {
        props.navigation.navigate('AddUser', { goBack: goBack })
    }

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

    return (
        <SafeAreaView style={Style.container}>
            <FlatList
                data={userList}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                style={Style.flatlist}
            />
            <PrimaryButton
                buttonTitle='Add User'
                buttonStyle={{ marginTop: 20 }}
                onPress={onPressAdd}
            />
            {isLoader && (<Loader />)}
        </SafeAreaView>
    );
}

export default Home;
