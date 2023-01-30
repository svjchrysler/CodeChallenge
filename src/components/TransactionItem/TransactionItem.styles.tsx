// @ts-ignore
import styled from 'styled-components/native';
import COLORS from "../../styles/COLORS";

const Container = styled.TouchableOpacity`
  flex-direction: row;
  padding: 10px;
  justify-content: space-between;
  align-items: center;
`

const ContentInformation = styled.View`
  flex-direction: column;
  justify-content: center;
  margin-left: 10px;
  width: 70%;
`;

const ContendDetail = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  width: 70%;
`

const ProductImage = styled.Image`
  width: 45px;
  height: 45px;
  border-radius: 10px;
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

const ContainerPoints = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 30%;
`;

const Plus = styled.Text`
  font-style: normal;
  font-weight: 800;
  font-size: 16px;
  line-height: 22px;
  color: ${COLORS.GREEN};
`;

const Less = styled.Text`
  font-style: normal;
  font-weight: 800;
  font-size: 16px;
  line-height: 22px;
  color: ${COLORS.RED};
`;

const Points = styled.Text`
  font-weight: 800;
  font-size: 16px;
  line-height: 22px;
  color: ${COLORS.DARK_BLACK};
`;

const ContentPoints = styled.View`
  flex-direction: row;
`

const IconsArrowRight =  styled.Image`
  width: 10px;
  height: 10px;
`;

export {
  Container,
  ProductName,
  ProductImage,
  ContentInformation,
  ProductDate,
  ContainerPoints,
  Plus,
  Less,
  Points,
  ContendDetail,
  IconsArrowRight,
  ContentPoints,
};