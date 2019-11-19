import styled from 'styled-components';

interface Props {
  image: string;
}

export const Container = styled.div<Props>`
  color: white;
  padding: 20px 20px;
  height: 282px;
  border-radius: 4px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.13);
  background: linear-gradient(to top, rgba(0, 0, 0, 0.2), #000),
    url(${(props) => props.image});
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  width: 150px;

  h2 {
    font-size: 20px;
    font-weight: bold;
    line-height: 1.1;
    color: #ffffff;
    margin: 0px;
    padding: 0;
    text-align: left;
  }

  p {
    font-size: 16px;
    line-height: 1.4;
    color: #ffffff;
    font-family: Nunito Sans;
  }

  @media (max-width: 768px) {
    width: auto;
  }
`;
