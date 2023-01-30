import React, {useEffect, useState} from 'react';

import {
  SafeAreaView, StatusBar,
  View
} from 'react-native';
import styles from "../../styles";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {ROUTES} from "../../helpers/Constants";

//components
import UserInformation from "../../components/UserInformation";
import PointsCard from '../../components/PointsCard';
import Transactions from "../../components/Transactions";
import Button from '../../components/Button';
import ContainerButtons from "../../components/ContainerButtons";

//utils
import COLORS from "../../styles/COLORS";
import instance from "../../services/axiosInstance";
import {AxiosResponse} from "axios";

//Models
import {ITransaction} from "../../models/transaction";


const Home = ({navigation}: NativeStackScreenProps<any>) => {

  const [transactions, setTransactions] = useState<AxiosResponse<Array<ITransaction>> | []>([]);
  const [isSelectedAll, setIsSelectedAll] = useState<boolean>(false);
  const [transactionList, setTransactionList] = useState<AxiosResponse<Array<ITransaction>> | []>([]);

  useEffect(() => {
    getTransactions();
  }, []);

  const getTransactions = async () => {
    const resultTransactions = await instance.get<Array<ITransaction>>('products');
    setTransactions(resultTransactions);
    setTransactionList(resultTransactions);
  };
  
  const navigateToProductDetail = () => {
    navigation.navigate(ROUTES.PRODUCT_DETAIL);
  }
  
  const showEarns = () => {
    setIsSelectedAll(true);
    const earns = transactions.filter((trans: ITransaction) => !trans.is_redemption);
    setTransactionList(earns);
  }
  
  const showRedemptions = () => {
    setIsSelectedAll(true);
    const earns = transactions.filter((trans: ITransaction) => trans.is_redemption);
    setTransactionList(earns);
  }
  
  const showAllTransactions = () => {
    setIsSelectedAll(false);
    setTransactionList(transactions);
  }
  
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor={COLORS.WHITE}
      />
      <View style={styles.space}>
        <UserInformation />
        <PointsCard 
          data={transactions} 
        />
        <Transactions
          data={transactionList} 
        />
        <ContainerButtons>
          {
            isSelectedAll ?
              <Button onPress={showAllTransactions} size={16} title={'Todos'} />
            : <>
                <Button onPress={showEarns} size={12} title={'Ganados'} />
                <Button onPress={showRedemptions} size={12} title={'Canjeados'} />
              </>
          }
          
        </ContainerButtons>
      </View>
    </SafeAreaView>
  );
}

export default Home;
