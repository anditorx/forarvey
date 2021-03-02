import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {StyleSheet} from 'react-native';
import FlashMessage from 'react-native-flash-message';
import 'react-native-gesture-handler';
import Router from './router';
import {Loading} from './components';
import {Provider, useSelector} from 'react-redux';
import store from './redux/store';

const MainApp = () => {
  const {isLoading} = useSelector((state) => state.globalReducer);
  console.log(isLoading);
  return (
    <NavigationContainer>
      <Router />
      <FlashMessage position="top" />
      {isLoading && <Loading />}
    </NavigationContainer>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <MainApp />
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});
