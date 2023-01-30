// @ts-ignore
import styled from 'styled-components/native';
import COLORS from "../../styles/COLORS";

const Container = styled.View`
`

const Greeting = styled.Text`
  font-style: normal;
  font-weight: 800;
  font-size: 20px;
  line-height: 27px;
  color: ${COLORS.BLACK};
`

const FullName = styled.Text`
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 27px;
  color: ${COLORS.BLACK};
`

export {
  Container,
  Greeting,
  FullName,
};