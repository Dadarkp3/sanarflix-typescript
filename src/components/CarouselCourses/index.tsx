import React from 'react';
import Slider from 'react-slick';
import { Course } from '../../store/ducks/courses/types';
import Loader from '../Loader';
import CourseItem from '../CourseItem';
import { Container } from './style';

interface Props {
  courses: Course[];
  loading: boolean;
  title?: string;
}

const CarouselCourses = ({ courses, loading, title }: Props) => {
  const settings = {
    slidesToShow: 4,
    slidesToScroll: 4,
    infinite: false,
    dots: true,
    draggable: true,
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: false,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: false,
        },
      },
      {
        breakpoint: 658,
        settings: {
          centerMode: true,
          centerPadding: '30px',
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };

  return (
    <Container>
      <h2>{title || ''}</h2>
      <Slider {...settings}>
        {loading && <Loader />}
        {!loading
          && courses.map((course) => <CourseItem key={course.id} course={course} />)}
      </Slider>
    </Container>
  );
};

export default CarouselCourses;
