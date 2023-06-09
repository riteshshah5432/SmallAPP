/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect, useState } from 'react';
import {
    Alert,
    SafeAreaView,
    View
} from 'react-native';
import Style from './style'
import Loader from '../../component/Loader'
import PrimaryButton from '../../component/PrimaryButton'
import TextInput from '../../component/TextInput'
import { Constants, Global } from '../../utils';
import { Services, APIHandler } from '../../networking'

const AddUser = (props) => {
    const { userObj, goBack } = props.route.params
    const [isLoader, setIsLoader] = useState(false)
    const [name, setName] = useState(userObj?.name)
    const [email, setEmail] = useState(userObj?.email)
    const [gender, setGender] = useState(userObj?.gender)
    const [status, setStatus] = useState(userObj?.status)
    const [emailErr, setEmailErr] = useState('')
    const [genderErr, setGenderErr] = useState('')
    const [statusErr, setStatusErr] = useState('')

    useEffect(() => {
        props.navigation.setOptions({
            title: userObj ? 'Edit User' : 'Add User'
        })
    }, [])

    const enableButton = () => {
        if (name != '' && email != '' && gender != '' && status != '') {
            return true
        }
        return false
    }

    const checkValidation = () => {
        let emailErr = ''
        let genderErr = ''
        let statusErr = ''
        setEmailErr('')
        setGenderErr('')
        setStatusErr('')
        if (!Global.emailValid(email)) {
            emailErr = Constants.errorMsg.email_not_valid
        }
        if (gender != 'male' && gender != 'female') {
            genderErr = Constants.errorMsg.gender_not_valid
        }
        if (status != 'active' && status != 'inactive') {
            statusErr = Constants.errorMsg.status_not_valid
        }
        if (emailErr != '' || genderErr != '' || statusErr != '') {
            setEmailErr(emailErr)
            setGenderErr(genderErr)
            setStatusErr(statusErr)
            return false
        }
        return true
    }

    const onPressSubmit = () => {
        if (checkValidation()) {
            if (userObj) {
                editUserData()
            } else {
                addUserData()
            }
        }
    }

    const addUserData = async () => {
        setIsLoader(true)
        try {
            const postData = {
                "name": name,
                "email": email,
                "gender": gender,
                "status": status
            }
            const apiUrl = APIHandler.getUser
            const response = await Services.POST(apiUrl, postData);
            console.log('Response:', response);
            setIsLoader(false)
            Alert.alert('Response', response?.message, [
                {
                    text: 'OK', onPress: () => {
                        props.navigation.goBack()
                        goBack()
                    }
                },
            ])
        } catch (error) {
            alert(error)
            setIsLoader(false)
            // handle error or show an error message
        }
    }

    const editUserData = async () => {
        setIsLoader(true)
        try {
            const postData = {
                "name": name,
                "email": email,
                "gender": gender,
                "status": status
            }
            const apiUrl = APIHandler.updateUser + userObj?.id
            const response = await Services.PUT(apiUrl, postData);
            console.log('Response:', response);
            setIsLoader(false)
            Alert.alert('Response', response?.message, [
                {
                    text: 'OK', onPress: () => {
                        props.navigation.goBack()
                        goBack()
                    }
                },
            ])
        } catch (error) {
            alert(error)
            setIsLoader(false)
            // handle error or show an error message
        }
    }

    return (
        <SafeAreaView style={Style.container}>
            <View style={Style.centerView}>
                <TextInput
                    value={name}
                    onChangeText={(e) => { setName(e) }}
                    placeholder='name'
                    autoCapitalize='none'
                />
                <View style={Style.marginTop10} />
                <TextInput
                    value={email}
                    onChangeText={(e) => { setEmail(e) }}
                    placeholder='email'
                    autoCapitalize='none'
                    errorText={emailErr}
                />
                <View style={Style.marginTop10} />
                <TextInput
                    value={gender}
                    onChangeText={(e) => { setGender(e) }}
                    placeholder='gender'
                    autoCapitalize='none'
                    errorText={genderErr}
                />
                <View style={Style.marginTop10} />
                <TextInput
                    value={status}
                    onChangeText={(e) => { setStatus(e) }}
                    placeholder='status'
                    autoCapitalize='none'
                    errorText={statusErr}
                />
            </View>
            <PrimaryButton
                buttonTitle='Submit'
                buttonStyle={[Style.buttonStyle, { backgroundColor: enableButton() ? Constants.colors.themeColor : Constants.colors.disable }]}
                onPress={onPressSubmit}
                disabled={!enableButton()}
                buttonTextColor={enableButton() ? Constants.colors.white : Constants.colors.disableText}
            />
            {isLoader && (<Loader />)}
        </SafeAreaView>
    );
}

export default AddUser;
