// @ts-ignore
import styled from 'styled-components/native';
import COLORS from "../../styles/COLORS";

const Container = styled.View`
  height: 20%;
  background-color: ${COLORS.PURPLE};
  flex-direction: row;
  align-items: flex-end;
  padding: 20px;
`;

const Title = styled.Text`
  font-style: normal;
  font-weight: 800;
  font-size: 24px;

  text-align: center;

  color: ${COLORS.DARK_BLACK};
`;


export {
  Container,
  Title,
}