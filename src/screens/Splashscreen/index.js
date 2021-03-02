import React, {useEffect} from 'react';
import {StatusBar, StyleSheet, Text, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {ILLogoSVG} from '../../assets';
import {Gap} from '../../components';
import {setToken} from '../../redux/action/auth';
import {colors, fonts, getDataStorage} from '../../utils';

const Splashcreen = ({navigation}) => {
  const dispatch = useDispatch();
  useEffect(() => {
    setTimeout(() => {
      getDataStorage('@token').then((res) => {
        if (res) {
          dispatch(setToken(res.value));
          navigation.reset({index: 0, routes: [{name: 'MainApp'}]});
        } else {
          navigation.replace('SignIn');
        }
      });
    }, 2000);
  }, []);

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor={colors.primary} />
      <View
        style={{
          backgroundColor: colors.primary,
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <ILLogoSVG />
        <Text
          style={{
            fontSize: 35,
            color: colors.black,
            fontFamily: fonts.boldPoppins,
          }}>
          USTORE
        </Text>
      </View>
    </>
  );
};

export default Splashcreen;

const styles = StyleSheet.create({});
