import React from 'react';
import { BtnProps } from '../../models/models';
import { ButtonDefault } from './style';

const Button = ({
  // eslint-disable-next-line indent
  text,
  link,
  color,
  padding,
  size,
}: BtnProps) => (
  <>
    <ButtonDefault
      padding={padding}
      size={size}
      color={color}
      text={text}
      to={link}
    >
      {text}
    </ButtonDefault>
  </>
);

export default Button;
