import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-flow: column;
  align-items: center;
  h1 {
    color: white;
  }

  @media (max-width: 768px) {
    .name {
      font-size: 32px;
    }
  }
`;
