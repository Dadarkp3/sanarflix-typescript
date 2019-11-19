import styled from 'styled-components';

export const Main = styled.div`
  width: 50vw;
  margin: 2rem auto;
  p {
    font-family: "Lora";
    font-size: 20px;
    line-height: 1.6;
    color: #555e61;
  }

  h2 {
    font-size: 25px;
    line-height: 1.1;
    text-align: center;
    color: #34393b;
    padding: 0px 4vw;
    font-weight: 100;
    margin: 2rem 0;
  }

  @media (max-width: 768px) {
    width: 83vw;
  }
`;

export const Grid = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
`;
