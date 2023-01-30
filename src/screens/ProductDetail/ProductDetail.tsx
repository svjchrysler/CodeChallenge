import React from 'react';

import {
  SafeAreaView,
  StatusBar,
  Text,
  View

} from 'react-native';
import styles from "../../styles";
import COLORS from "../../styles/COLORS";

const ProductDetail = () => {
  
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor={COLORS.WHITE}
      />
      <View style={styles.space}>
        
      </View>
      <Text>Product DETAIL</Text>
    </SafeAreaView>
  );
  
}

export default ProductDetail;