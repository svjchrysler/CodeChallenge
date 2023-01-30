// @ts-ignore
import styled from 'styled-components/native';
import COLORS from "../../styles/COLORS";

interface IText {
  size: number, 
}

const PrimaryButton = styled.TouchableOpacity`
  flex: 1;
  background: ${COLORS.BLUE};
  border-radius: 10px;
  padding: 15px;
  justify-content: center;
  align-items: center;
`;

const TextButton = styled.Text<IText>`
  font-style: normal;
  font-weight: 800;
  font-size: ${({size}: IText) => `${size}px`};
  line-height: 22px;
  color: ${COLORS.WHITE};
`; 

export {
  PrimaryButton,
  TextButton,
}