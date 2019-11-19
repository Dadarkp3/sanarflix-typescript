import React, { Component } from 'react';
import { Dispatch, bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { Container } from './style';
import { ApplicationState } from '../../store';

import * as teachersActions from '../../store/ducks/teachers/actions';

import { Teacher } from '../../store/ducks/teachers/types';
import CarouselTeachers from '../../components/CarouselTeachers';

interface StateProps {
  teachers: Teacher[];
  loading: boolean;
}

interface DispatchProps {
  loadRequest(): void;
}

type Props = StateProps & DispatchProps;

class TeachersContainer extends Component<Props> {
  componentDidMount() {
    const { loadRequest } = this.props;
    loadRequest();
  }

  render() {
    const { teachers, loading } = this.props;

    return (
      <>
        <Container>
          <CarouselTeachers teachers={teachers} loading={loading} />
        </Container>
      </>
    );
  }
}

const mapStateToProps = (state: ApplicationState) => ({
  teachers: state.teachers.data,
  loading: state.teachers.loading,
});

// eslint-disable-next-line max-len
const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(teachersActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TeachersContainer);
