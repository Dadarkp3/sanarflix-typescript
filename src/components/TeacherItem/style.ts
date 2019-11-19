import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 10px;
  margin: 10px;
  h1 {
    text-align: center;
    font-size: 16px;
    font-weight: 500;
    width: fit-content;
  }

  img {
    width: 6.5vw;
    border-radius: 50%;
    border: 1px solid grey;
    @media (max-width: 768px) {
      width: 140px;
    }
  }
`;
