import styled from 'styled-components';

export const Container = styled.div`
  font-family: Nunito Sans;
  transform: translatey(-50px);
  display: flex;
  flex-flow: column;
  align-items: center;
  h3 {
    font-size: 16px;
    font-weight: 100;
  }
  h2 {
    font-size: 49px;
    margin: 0;
    font-weight: 100;
    @media (max-width: 768px) {
      font-size: 41px;
      text-align: center;
    }
  }
`;
