import React from 'react';
import {Container, ContentInformation, Label, ProductImage, Value} from "./ProductInformation.styles";
import {ITransaction} from "../../models/transaction";
import moment from "moment/moment";

interface IProductInformation {
  product: ITransaction
}

const ProductInformation = ({product}: IProductInformation) => {
  return (
    <Container>
      <ProductImage source={{uri: product.image}} />
      <ContentInformation>
        <Label>
          Detalles del producto:
        </Label>
        
        <Value fontSize={16} marginTop={0}>
          {`Comprado el ${moment(product.createdAt).format('d [de] MMMM, YYYY')}`}
        </Value>

        <Label>
          Con esta compra acumulaste:
        </Label>

        <Value fontSize={24} marginTop={20}>
          {`${product.points.toLocaleString('en-US')} puntos`}
        </Value>
      </ContentInformation>
    </Container>
  );
};

export default ProductInformation;