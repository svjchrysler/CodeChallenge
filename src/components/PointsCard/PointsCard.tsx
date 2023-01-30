import React from 'react';
import {Container, Title, Card, Month, Points, Center} from "./PointsCard.styles";

const PointsCard = () => {
  return (
    <Container>
      <Title>
        Tus Puntos
      </Title>
      <Center>
        <Card>
          <Month>
            Diciembre
          </Month>
          <Points>
            10,00.00 pts
          </Points>
        </Card>
      </Center>
    </Container>
  );
};

export default PointsCard;