import React from 'react';
import loader from '../../assets/images/loading.svg';
import { Flex } from './style';

const Loader = () => (
  <Flex>
    <img width={40} src={loader} alt="loading" />
  </Flex>
);

export default Loader;
