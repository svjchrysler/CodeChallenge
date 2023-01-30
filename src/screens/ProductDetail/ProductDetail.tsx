import React from 'react';

import {
  SafeAreaView,
  StatusBar,
  Text,
  View

} from 'react-native';
import {backgroundStyle, isDarkMode} from "../../styles";

const ProductDetail = () => {
  
  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <Text>Product DETAIL</Text>
    </SafeAreaView>
  );
  
}

export default ProductDetail;