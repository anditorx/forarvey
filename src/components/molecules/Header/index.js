import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import {
  ICArrowBackBlackSVG,
  ICArrowBackWhiteSVG,
  ILNoProfilePictPNG,
} from '../../../assets';
import {fonts, colors} from '../../../utils';

const Header = ({title, subTitle, type, onPressBack, withIconBack}) => {
  const [photo, setPhoto] = useState(ILNoProfilePictPNG);
  // useEffect(() => {
  //   getDataStorage('userProfile').then((res) => {
  //     console.log('res : ', res);
  //     if (res) {
  //       setPhoto({uri: res.profile_photo_url});
  //     }
  //   });
  // }, []);

  if (type === 'header-detail') {
    return (
      <TouchableOpacity onPress={onPressBack} style={styles.btnBack}>
        <ICArrowBackWhiteSVG />
      </TouchableOpacity>
    );
  }

  if (type === 'header-homescreen') {
    return (
      <View style={styles.profileWrapper}>
        <View>
          <Text style={styles.appName}>USTORE</Text>
          <Text style={styles.textWelcome}>Selamat datang di Toko kami</Text>
        </View>
        <TouchableOpacity>
          <Image source={photo} style={styles.profile} />
        </TouchableOpacity>
      </View>
    );
  }
  return (
    <View style={styles.wrapper}>
      {withIconBack && (
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={onPressBack}
          style={styles.wrapperIconBack}>
          <ICArrowBackBlackSVG />
        </TouchableOpacity>
      )}
      <View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subTitle}>{subTitle}</Text>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: colors.white,
    paddingHorizontal: 24,
    paddingTop: 30,
    paddingBottom: 24,
    flexDirection: 'row',
    alignItems: 'center',
  },
  wrapperIconBack: {
    backgroundColor: colors.white,
    padding: 16,
    marginRight: 16,
    marginLeft: -10,
  },
  title: {
    fontSize: 22,
    fontFamily: fonts.mediumPoppins,
    color: colors.black,
  },
  subTitle: {
    fontSize: 14,
    fontFamily: fonts.lightPoppins,
    color: colors.greyLight2,
  },
  profileWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingTop: 32,
    paddingBottom: 24,
    backgroundColor: colors.white,
  },
  appName: {
    fontSize: 24,
    fontFamily: fonts.boldPoppins,
    color: colors.black,
  },
  textWelcome: {
    fontSize: 14,
    fontFamily: fonts.lightPoppins,
    color: colors.greyLight2,
  },
  profile: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
  },
  btnBack: {
    backgroundColor: colors.primary,
    height: 35,
    width: 35,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 35 / 2,
    marginLeft: 20,
    marginTop: 20,
  },
});
