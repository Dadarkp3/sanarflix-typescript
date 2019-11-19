/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react';
import { Container } from './style';

const VideoContainer = () => (
  <Container>
    <iframe
      width="560"
      height="315"
      src="https://www.youtube.com/embed/CfbNAMCSYHU"
    />
  </Container>
);

export default VideoContainer;
