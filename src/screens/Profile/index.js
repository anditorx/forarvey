import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect, useState} from 'react';
import {
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {Gap, List} from '../../components';
import {API_HOST} from '../../config';
import {setLoading} from '../../redux/action';
import {colors, fonts, getDataStorage} from '../../utils';

const Profile = ({navigation}) => {
  const stateUser = useSelector((state) => state);
  console.log('stateuser : ', stateUser);
  const dispatch = useDispatch();
  const [userProfile, setUserProfile] = useState(null);

  useEffect(() => {
    getDataStorage('@user').then((res) => {
      console.log(res);
      setUserProfile(res);
    });
  }, []);

  const onPressSignOut = () => {
    dispatch(setLoading(true));
    AsyncStorage.multiRemove(['@user', '@token']).then(() => {
      dispatch(setLoading(false));
      navigation.reset({index: 0, routes: [{name: 'SignIn'}]});
    });
  };

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor={colors.white} />
      <View style={styles.screen}>
        <ScrollView style={styles.container}>
          {userProfile && (
            <View style={styles.photo}>
              <View style={styles.borderPhoto}>
                <Image
                  style={styles.img}
                  source={{
                    uri: `${API_HOST.base_url}/storage/${userProfile.profile_photo_path}`,
                  }}
                />
              </View>
              <Gap height={10} />
              <Text style={styles.name}>{userProfile.name}</Text>
              <Text style={styles.email}>{userProfile.email}</Text>
            </View>
          )}
          <View style={styles.content}>
            <Gap height={10} />
            <List type="list-profile" name="Edit Profile" />
            <List type="list-profile" name="Rate this App" />
            <List type="list-profile" name="Call Center" />
            <List
              type="list-profile"
              name="Sign Out"
              onPress={onPressSignOut}
            />
          </View>
        </ScrollView>
      </View>
    </>
  );
};

export default Profile;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  container: {
    backgroundColor: colors.white,
    paddingHorizontal: 24,
    paddingVertical: 26,
    // marginTop: 24,
    flex: 1,
  },
  photo: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 26,
    marginBottom: 16,
  },
  borderPhoto: {
    borderWidth: 1,
    borderColor: colors.greyLight2,
    width: 110,
    height: 110,
    borderRadius: 110,
    borderStyle: 'dashed',
    justifyContent: 'center',
    alignItems: 'center',
  },
  photoWrapper: {
    height: 90,
    width: 90,
    borderRadius: 90,
    backgroundColor: colors.greyLight,
    padding: 24,
  },
  txtAddPhoto: {
    fontSize: 14,
    fontFamily: fonts.lightPoppins,
    color: colors.greyLight2,
    textAlign: 'center',
  },
  name: {
    fontSize: 16,
    fontFamily: fonts.mediumPoppins,
    color: colors.black,
    textAlign: 'center',
  },
  email: {
    fontSize: 13,
    fontFamily: fonts.lightPoppins,
    color: colors.greyLight2,
    textAlign: 'center',
  },
  img: {
    height: 90,
    width: 90,
    borderRadius: 90 / 2,
    // backgroundColor: colors.greyLight,
    // padding: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
