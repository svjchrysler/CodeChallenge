// @ts-ignore
import styled from 'styled-components/native';
import COLORS from "../../styles/COLORS";

const Container = styled.View`
  flex-direction: row;
`

const ContentInformation = styled.View`
  flex-direction: column;
`

const ProductImage = styled.Image`
  width: 45px;
  height: 45px;
` 
const ProductName = styled.Text`
  font-style: normal;
  font-weight: 800;
  font-size: 14px;
  line-height: 19px;
  color: ${COLORS.DARK_BLACK};
`

const ProductDate = styled.Text`
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: ${COLORS.DARK_BLACK};
`;
export {
  Container,
  ProductName,
  ProductImage,
  ContentInformation,
  ProductDate,
};