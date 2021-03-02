import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors} from '../../../utils';

const Separator = () => {
  return (
    <View style={{borderColor: colors.greyLight, borderWidth: 0.2}}></View>
  );
};

export default Separator;

const styles = StyleSheet.create({});
