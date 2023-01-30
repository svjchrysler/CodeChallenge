import React from 'react';
import {
  Container,
  ProductName,
  ProductImage,
  ContentInformation,
  ProductDate,
  Points,
  ContainerPoints, ContendDetail, IconsArrowRight, ContentPoints, Plus, Less,
} from "./TransactionItem.styles";
import {ITransaction} from "../../models/transaction";
import {ListRenderItemInfo} from "react-native";
import moment from "moment";
import Icons from '../../helpers/Icons';
import * as RootNavigation from '../../navigation/RootNavigation';
import {ROUTES} from "../../helpers/Constants";

const TransactionItem = ({ item }: ListRenderItemInfo<ITransaction>) => {
  
  const goToProductDetail = () => {
    RootNavigation.navigate(ROUTES.PRODUCT_DETAIL, { product: item });
  }
  
  return (
    <Container onPress={goToProductDetail}>
      <ContendDetail>
        <ProductImage source={{ uri: item.image  }} />
        <ContentInformation>
          <ProductName>
            {item.product.replace(' ', '')}
          </ProductName>
          <ProductDate>
            {moment(item.createdAt).format('d [de] MMMM, YYYY')}
          </ProductDate>
        </ContentInformation>
      </ContendDetail>
      <ContainerPoints>
        <ContentPoints>
          {
            item.is_redemption ?
              <Less>-</Less>
              :
              <Plus>+</Plus>
          }
          <Points>{item.points.toLocaleString('en-US')}</Points>
        </ContentPoints>
        <IconsArrowRight source={Icons.arrowRight} />
      </ContainerPoints>
    </Container>
  );
};

export default TransactionItem;