import React, { Component } from 'react';
import { Dispatch, bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { Container } from './style';
import { ApplicationState } from '../../store';

import * as coursesActions from '../../store/ducks/courses/actions';

import { Course } from '../../store/ducks/courses/types';

import CarouselCourses from '../../components/CarouselCourses';

interface StateProps {
  courses: Course[];
  loading: boolean;
}

interface DispatchProps {
  loadRequest(): void;
}

type Props = StateProps & DispatchProps;

class CoursesContainer extends Component<Props> {
  componentDidMount() {
    const { loadRequest } = this.props;
    loadRequest();
  }

  render() {
    const { courses, loading } = this.props;

    return (
      <>
        <Container>
          <CarouselCourses
            title="Todos os Cursos"
            loading={loading}
            courses={courses}
          />
        </Container>
        <Container>
          <CarouselCourses
            title="Mais pesquisados"
            loading={loading}
            courses={courses}
          />
        </Container>
      </>
    );
  }
}

const mapStateToProps = (state: ApplicationState) => ({
  courses: state.courses.data,
  loading: state.courses.loading,
});

// eslint-disable-next-line max-len
const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(coursesActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CoursesContainer);
