// @ts-ignore
import styled from 'styled-components/native';
import COLORS from "../../styles/COLORS";
import {ListRenderItem} from "react-native";
import {ITransaction} from "../../models/transaction";
import { 
  Dimensions,
} from 'react-native';

const { height } = Dimensions.get('screen');

const Container = styled.View`
  height: ${height * 0.45}px;
`

const Title = styled.Text`
  font-style: normal;
  font-weight: 800;
  font-size: 14px;
  line-height: 20px;
  color: ${COLORS.GRAY};
  text-transform: uppercase;
  margin-vertical: 20px;
`

const List = styled.FlatList<ListRenderItem<ITransaction>>`
  height: 45%;
  background-color: ${COLORS.WHITE};
  border-radius: 10px;
  padding-horizontal: 10px;
`

export {
  Container,
  Title,
  List,
};