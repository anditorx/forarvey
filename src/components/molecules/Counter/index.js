import React, {useEffect} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {ICCounterAdd, ICCounterMin} from '../../../assets';
import {colors, fonts} from '../../../utils';

const Counter = ({
  navigation,
  onPressAddCount,
  onPressMinCount,
  value,
  onValueChange,
}) => {
  return (
    <View style={styles.wrapper}>
      <TouchableOpacity onPress={onPressMinCount}>
        <ICCounterMin />
      </TouchableOpacity>
      <Text style={styles.value}>{value}</Text>
      <TouchableOpacity onPress={onPressAddCount}>
        <ICCounterAdd />
      </TouchableOpacity>
    </View>
  );
};

export default Counter;

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  value: {
    fontSize: 16,
    fontFamily: fonts.regularPoppins,
    color: colors.black,
    marginHorizontal: 15,
  },
});
