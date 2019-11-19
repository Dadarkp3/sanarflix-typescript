import React from 'react';
import { Container } from './style';

interface OwnProps {
  title: string;
  subtitle: string;
  image: string;
}

const Card = ({ title, subtitle, image }: OwnProps) => (
  <Container image={image}>
    <h2>{title}</h2>
    <p>{subtitle}</p>
  </Container>
);

export default Card;
