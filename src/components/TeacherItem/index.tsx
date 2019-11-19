/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { Teacher } from '../../store/ducks/teachers/types';
import { Container } from './style';

interface OwnProps {
  teacher: Teacher;
}

const TeacherItem = ({ teacher }: OwnProps) => (
  <Container key={teacher.id}>
    <img src={teacher.imagem} />
    <div>
      <h1>{teacher.nome}</h1>
    </div>
  </Container>
);

export default TeacherItem;
