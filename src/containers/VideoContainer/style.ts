import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  iframe {
    border: 0;
    margin: -10rem 0 0 0;
    @media (max-width: 768px) {
      width: 91vw;
      height: 50vw;
    }
  }
`;
