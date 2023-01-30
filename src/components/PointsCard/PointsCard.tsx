import React, {useEffect, useState} from 'react';
import {Container, Title, Card, Month, Points, Center} from "./PointsCard.styles";
import {AxiosResponse} from "axios/index";
import {ITransaction} from "../../models/transaction";

interface IPointsCard {
  data: AxiosResponse<Array<ITransaction>> | []
}

const PointsCard = ({data = []}: IPointsCard) => {
  
  const [points, setPoints] = useState<number>(0);
  
  useEffect(() => {
    const totalPoints: number = data
      .filter((pts: ITransaction) => !pts.is_redemption)
      .reduce((accumulator: number, currentValue: ITransaction) => {
        return accumulator + currentValue.points;
      }, 0);
    setPoints(totalPoints);
  }, [data])
  
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
            {`${points.toLocaleString('en-US')} pts`}
          </Points>
        </Card>
      </Center>
    </Container>
  );
};

export default PointsCard;