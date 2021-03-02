import React from 'react';
import {
  Home,
  Order,
  ProductDetail,
  Profile,
  SignIn,
  Splashscreen,
} from '../screens';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {BottomNavigator} from '../components';
import {createStackNavigator} from '@react-navigation/stack';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const MainApp = () => {
  return (
    <Tab.Navigator tabBar={(props) => <BottomNavigator {...props} />}>
      {/* <Tab.Navigator> */}
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Order" component={Order} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

const Router = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Splashscreen"
        component={Splashscreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MainApp"
        component={MainApp}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ProductDetail"
        component={ProductDetail}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Router;
