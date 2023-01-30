// @ts-ignore
import styled from 'styled-components/native';
import COLORS from "../../styles/COLORS";

interface IValue {
  fontSize: number,
  marginTop: number,
}

const Container = styled.View`
  height: 75%;
`

const ProductImage = styled.Image`
  width: 100%;
  height: 60%;
  resize-mode: cover;
  border-radius: 10px;
`

const ContentInformation = styled.View`
  flex-direction: column;
  gap: 10px;
  margin-top: 15px;
`

const Label = styled.Text`
  font-style: normal;
  font-weight: 800;
  font-size: 14px;
  line-height: 19px;
  color: ${COLORS.GRAY};
`

const Value = styled.Text<IValue>`
  font-style: normal;
  font-weight: 800;
  font-size: ${({fontSize}: IValue) => fontSize }px;
  margin-top: ${({marginTop}: IValue) => marginTop }px;
  color: ${COLORS.DARK_BLACK};
`

export {
  Container,
  ProductImage,
  ContentInformation,
  Value,
  Label,
};