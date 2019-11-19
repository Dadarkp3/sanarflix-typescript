import styled from 'styled-components';

export const Card = styled.div`
  width: 282px !important;
  height: 193px;
  border-radius: 4px;
  border-radius: 4px;
  position: relative;
  background-size: cover !important;
  background-position: center !important;
  overflow: hidden;
  background: grey;
  background: linear-gradient(
      to bottom,
      rgba(19, 21, 21, 0.4),
      rgba(19, 21, 21, 0.8)
    ),
    url(https://s3.amazonaws.com/thinkific/courses/course_card_image_000/386/0481544722125.medium.jpg?1544722125);
  p {
    position: absolute;
    bottom: 0;
    left: 0;
    margin-left: 16px;
    margin-right: 16px;
    color: #fff;
    font-size: 20px;
  }
`;
