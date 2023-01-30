import React from 'react';
import {Container, ProductName, ProductImage, ContentInformation, ProductDate} from "./TransactionItem.styles";
import {ITransaction} from "../../models/transaction";
import {ListRenderItemInfo} from "react-native";

const TransactionItem = ({ item }: ListRenderItemInfo<ITransaction>) => {
  return (
    <Container>
      <ProductImage source={{ uri: item.image  }} />
      <ContentInformation>
        <ProductName>
          {item.product}
        </ProductName>
        <ProductDate>
          {item.createdAt}
        </ProductDate>
      </ContentInformation>
    </Container>
  );
};

export default TransactionItem;