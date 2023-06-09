import React from 'react';
import { View, Image } from 'react-native';
import { Global, Images } from '../../utils'
import Style from './style'
import Text from '../Text'

const UserDetails = (props) => {
    const {
        item
    } = props;
    const userAvatar = [Images.user1, Images.user2, Images.user3, Images.user4, Images.user5, Images.user6]
    const randomNumber = Math.floor(Math.random() * userAvatar.length);
    return (
        <View style={Style.container}>
            <Image source={userAvatar[randomNumber]} style={Style.avatarImage} />
            <View style={Style.infoView}>
                <View style={[Style.statusView, { backgroundColor: Global.getStatusColor(item?.status)[0] }]}>
                    <Text
                        title={item?.status}
                        style={{ textTransform: 'capitalize', color: Global.getStatusColor(item?.status)[1] }}
                    />
                </View>
                <Text title={item?.name} />
                <Text title={item?.email} />
                <Text title={item?.gender} style={{ textTransform: 'capitalize' }} />
            </View>
        </View>
    );
};

export default UserDetails;