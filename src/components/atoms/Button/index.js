import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {ICCartWhite, ICGoogle} from '../../../assets';
import {colors, fonts} from '../../../utils';
import Gap from '../Gap';

const Button = ({text, disable, onPress, type}) => {
  if (type === 'shopping-cart') {
    return (
      <TouchableOpacity onPress={onPress} style={styles.wrapperBtnCart}>
        <ICCartWhite />
      </TouchableOpacity>
    );
  }

  if (disable) {
    return (
      <View style={styles.wrapper(disable)}>
        <Text style={styles.text}>{text}</Text>
      </View>
    );
  }

  if (type === 'signin-google') {
    return (
      <TouchableOpacity onPress={onPress} style={styles.wrapperBtnGoogle}>
        <ICGoogle />
        <Gap width={20} />
        <Text style={styles.text}>{text}</Text>
      </TouchableOpacity>
    );
  }

  return (
    <TouchableOpacity onPress={onPress} style={styles.wrapper(disable)}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  wrapper: (disable) => ({
    backgroundColor: disable ? colors.greyLight : colors.primary,
    padding: 12,
    borderRadius: 12,
    elevation: disable ? 0 : 10,
  }),
  text: {
    fontSize: 16,
    fontFamily: fonts.mediumPoppins,
    color: colors.black,
    textAlign: 'center',
  },
  textForCart: {
    fontSize: 13,
    fontFamily: fonts.mediumPoppins,
    color: colors.black,
    textAlign: 'center',
  },
  wrapperBtnCart: {
    backgroundColor: colors.primary,
    padding: 12,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrapperBtnGoogle: {
    flexDirection: 'row',
    backgroundColor: colors.white,
    padding: 12,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 10,
  },
});
