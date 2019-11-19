import React, { useRef } from 'react';
import { Carousel } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Teacher } from '../../store/ducks/teachers/types';
import { Container, Previous, Next } from './style';
import Loader from '../Loader';
import TeacherItem from '../TeacherItem';

interface Props {
  teachers: Teacher[];
  loading: boolean;
}

const CarouselTeachers = ({ teachers, loading }: Props) => {
  const carousel = useRef<Carousel | null>(null);
  const settings = {
    centerMode: true,
    slidesToShow: 5,
    dots: false,
    infinite: true,
    draggable: true,
    ref: carousel,
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 658,
        settings: {
          centerMode: true,
          centerPadding: '30px',
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const next = () => {
    if (carousel.current) {
      carousel.current.next();
    }
  };

  const prev = () => {
    if (carousel.current) {
      carousel.current.prev();
    }
  };

  return (
    <Container>
      {loading && <Loader />}
      <Carousel {...settings}>
        {teachers.map((teacher) => (
          <TeacherItem key={teacher.id} teacher={teacher} />
        ))}
      </Carousel>
      <Previous onClick={() => prev()}>
        <FontAwesomeIcon icon={faArrowLeft} />
      </Previous>
      <Next onClick={() => next()}>
        <FontAwesomeIcon icon={faArrowRight} />
      </Next>
    </Container>
  );
};

export default CarouselTeachers;
