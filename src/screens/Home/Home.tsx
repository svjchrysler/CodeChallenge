import React from 'react';

import {
  Button, SafeAreaView, StatusBar,
  Text,
  View
} from 'react-native';
import {backgroundStyle, isDarkMode} from "../../styles";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {ROUTES} from "../../helpers/Constants";


const Home = ({navigation}: NativeStackScreenProps<any>) => {
  
  const navigateToProductDetail = () => {
    navigation.navigate(ROUTES.PRODUCT_DETAIL);
  }
  
  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <Text>HOME</Text>
      <Button title={'navigate'} onPress={navigateToProductDetail} />
    </SafeAreaView>
  );
}

export default Home;
