import React from 'react';
import {Container, Title, List} from "./Transactions.styles";
import TransactionItem from "../TransactionItem";
import {ITransaction} from "../../models/transaction";
import {AxiosResponse} from "axios";
import {NativeStackScreenProps} from "@react-navigation/native-stack";

interface ITransactions {
  data: AxiosResponse<Array<ITransaction>> | [],
}
const Transactions = ({data}: ITransactions) => {
  return (
    <Container>
      <Title>
        Tus Movimientos
      </Title>
      <List
         data={data}
         renderItem={TransactionItem}
         keyExtractor={(item: ITransaction) => item.id}
      />
    </Container>
  );
};

export default Transactions;