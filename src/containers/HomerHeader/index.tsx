import React from 'react';
import Button from '../../components/Button';
import { Container } from './style';

const HomeHeader = () => (
  <Container>
    <h1 className="title name">A plataforma online do estudante de medicina</h1>
    <h4 className="title">
      Milhares de conteúdos de medicina que se encaixam no seu perfil.
    </h4>
    <Button
      size="18px"
      text="Assine Agora"
      link="/login"
      color="e73d3a"
      padding="0.4rem 3rem"
    />
    <Button
      size="18px"
      text="Conheça nosso cursos"
      link="/login"
      color="transparent"
      padding="0.4rem 0rem"
    />
  </Container>
);
export default HomeHeader;
