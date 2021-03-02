import React, {useEffect, useState} from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Button, Gap, Header, TextInput} from '../../components';
import {colors} from '../../utils/colors';
import {toast, useForm} from '../../utils';
import Axios from 'axios';
import {API_HOST} from '../../config';
import {useDispatch, useSelector} from 'react-redux';
import {setLoading} from '../../redux/action';
import {signInAction} from '../../redux/action/auth';

const SignIn = ({navigation}) => {
  const dispatch = useDispatch();
  const [form, setForm] = useForm({
    email: '',
    password: '',
  });

  const onPressSubmit = () => {
    dispatch(signInAction(form, navigation));
  };

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor={colors.white} />
      <View style={styles.screen}>
        <Header title="Sign In" subTitle="Get the best product for you" />
        <View style={styles.container}>
          <TextInput
            label="Email"
            placeholder="Type your email"
            value={form.email}
            onChangeText={(value) => setForm('email', value)}
          />
          <Gap height={17} />
          <TextInput
            label="Password"
            placeholder="Type your password"
            value={form.password}
            onChangeText={(value) => setForm('password', value)}
            secureTextEntry
          />
          <Gap height={50} />
          {form.email !== '' &&
          form.password !== '' &&
          form.password.length > 5 ? (
            <Button text="Sign In" onPress={onPressSubmit} />
          ) : (
            <Button text="Sign In" disable />
          )}
          <Gap height={15} />
          <Text style={styles.txtOr}>- OR - </Text>
          <Gap height={15} />
          <Button
            type="signin-google"
            text="Sign In with Google"
            onPress={onPressSubmit}
          />
        </View>
      </View>
    </>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  container: {
    backgroundColor: colors.white,
    paddingHorizontal: 24,
    paddingVertical: 26,
    marginTop: 24,
    flex: 1,
  },
  textRegister: {
    textAlign: 'center',
  },
  txtOr: {textAlign: 'center'},
});
