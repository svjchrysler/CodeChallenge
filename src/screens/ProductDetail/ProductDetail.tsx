import React from 'react';

import {
  SafeAreaView,
  StatusBar,
  Text,
  View

} from 'react-native';
import styles from "../../styles";
import COLORS from "../../styles/COLORS";
import {ITransaction} from "../../models/transaction";
import Header from "../../components/Header";
import ContainerButtons from "../../components/ContainerButtons";
import Button from "../../components/Button";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import ProductInformation from "../../components/ProductInformation";

interface  IProductDetail {
  route: any,
  navigation: NativeStackScreenProps<any>
}

const ProductDetail = ({route, navigation}: IProductDetail) => {
  
  const product: ITransaction = route.params.product;
  
  const goBack = () => {
    navigation.goBack();
  }
  
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor={COLORS.PURPLE}
      />
      <Header title={product.product} />
      <View style={styles.space}>
        <ProductInformation product={product} />
        <ContainerButtons>
          <Button title={'Aceptar'} size={16} onPress={goBack} />
        </ContainerButtons>
      </View>
    </View>
  );
  
}

export default ProductDetail;