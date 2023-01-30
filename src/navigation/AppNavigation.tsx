import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//Screens
import Home from '../screens/Home';
import ProductDetail from '../screens/ProductDetail';

//utils
import {ROUTES} from "../helpers/Constants";
import { navigationRef } from './RootNavigation';

const Stack = createNativeStackNavigator();

const MainStack = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
      >
        <Stack.Screen name={ROUTES.HOME} component={Home} />
        <Stack.Screen name={ROUTES.PRODUCT_DETAIL} component={ProductDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainStack;
