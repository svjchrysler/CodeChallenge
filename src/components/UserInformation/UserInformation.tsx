import React from 'react';
import {Container, FullName, Greeting} from "./UserInformation.styles";

const UserInformation = () => {
  return (
    <Container>
      <Greeting>
        Bienvenido de vuelta!
      </Greeting>
      <FullName>
        Ruben Rodriguez
      </FullName>
    </Container>
  );
};

export default UserInformation;