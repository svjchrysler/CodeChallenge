import React from 'react';
import {Container} from "./ContainerButtons.styles";

interface  IContainerButtons {
  children: JSX.Element
}
const ContainerButtons = ({children}: IContainerButtons) => {

  return (
    <Container>
      {children}
    </Container>
  )

}

export default ContainerButtons;