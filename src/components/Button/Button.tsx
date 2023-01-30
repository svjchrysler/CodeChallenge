import React from 'react';
import {PrimaryButton, TextButton} from "./Button.styles";

interface IButton {
  title: string,
  size: number,
  onPress: () => void,
}
const Button = ({title, size, onPress}: IButton) => {

  return (
    <PrimaryButton onPress={onPress}>
      <TextButton size={size}>
        {title}
      </TextButton>
    </PrimaryButton>
  )

}

export default Button;