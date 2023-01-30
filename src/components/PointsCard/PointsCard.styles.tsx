// @ts-ignore
import styled from 'styled-components/native';
import COLORS from "../../styles/COLORS";

const Container = styled.View`
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

const Center = styled.View`
  align-items: center;
  justify-content: center;
`

const Card = styled.View`
  background: #334FFA;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.5);
  border-radius: 20px;
  padding: 15px;
  width: 85%;
  margin-top: 5px;
`

const Month = styled.Text`
  font-style: normal;
  font-weight: 800;
  font-size: 16px;
  line-height: 30px;
  color: ${COLORS.WHITE};
`

const Points = styled.Text`
  font-style: normal;
  font-weight: 800;
  font-size: 32px;
  line-height: 80px;
  color: ${COLORS.WHITE};
  text-align: center;
  margin-bottom: 20px;
`

export {
  Container,
  Title,
  Card,
  Month,
  Points,
  Center,
};