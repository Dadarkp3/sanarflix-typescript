import React from 'react';

// Import Images
import Banner from '../../assets/images/banner-home.jpg';

// Import Components
import Header from '../../components/Header';
import HomeHeader from '../../containers/HomerHeader';
import CoursesContainer from '../../containers/CoursesContainer';

const Home = () => (
  <>
    <Header url={Banner} height={100} component={<HomeHeader />} />
    <CoursesContainer />
  </>
);

export default Home;
