import React from 'react';
import { Course } from '../../store/ducks/courses/types';
import { Card } from './styles';

interface OwnProps {
  course: Course;
}

const CourseItem = ({ course }: OwnProps) => (
  <Card>
    <p>{course.nome}</p>
  </Card>
);

export default CourseItem;
