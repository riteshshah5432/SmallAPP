/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import {
    Image,
    SafeAreaView,
    ScrollView,
    View
} from 'react-native';
import style from './style'
import { Images, Constants, Global } from '../../utils'
import Text from '../../component/Text'
import TextInput from '../../component/TextInput'
import PrimaryButton from '../../component/PrimaryButton'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [emailErr, setEmailErr] = useState('')

    const checkValidation = () => {
        let emailErr = ''
        setEmailErr('')
        if (!Global.emailValid(email)) {
            emailErr = Constants.errorMsg.email_not_valid
        }
        else if (email != Constants.staticCredential.email || password != Constants.staticCredential.password) {
            alert(Constants.errorMsg.credential_not_valid)
            return false
        }
        if (emailErr != '') {
            setEmailErr(emailErr)
            return false
        }
        return true
    }

    const enableButton = () => {
        if (email != '' && password != '' && password.length >= 6) {
            return true
        }
        return false
    }

    const onPressLogin = () => {
        if (checkValidation()) {
            alert('Login')
        }
    }

    return (
        <SafeAreaView style={style.container}>
            <ScrollView style={style.scrollView} contentContainerStyle={style.scrollViewContainer} showsVerticalScrollIndicator={false}>
                <Image source={Images.key} style={style.topImage} />
                <Text
                    title='Welcome To SmallApp'
                    textStyle={style.titleText}
                    textSize={Constants.textSize.xl}
                />
                <Text
                    title='Enter your credentials to continue.'
                    textSize={Constants.textSize.md}
                    textColor={Constants.colors.lightGray}
                    textStyle={style.subText}
                />
                <TextInput
                    value={email}
                    onChangeText={(e) => { setEmail(e) }}
                    placeholder='Email'
                    errorText={emailErr}
                />
                <View style={style.marginTop10} />
                <TextInput
                    value={password}
                    onChangeText={(e) => { setPassword(e) }}
                    placeholder='Password'
                    secureTextEntry={true}
                />
                <PrimaryButton
                    buttonTitle='Login'
                    buttonStyle={{ marginTop: 20, backgroundColor: enableButton() ? Constants.colors.themeColor : Constants.colors.disable }}
                    onPress={onPressLogin}
                    disabled={!enableButton()}
                    buttonTextColor={enableButton() ? Constants.colors.white : Constants.colors.disableText}
                />
            </ScrollView>
        </SafeAreaView>
    );
}

export default Login;
