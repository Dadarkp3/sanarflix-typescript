import styled from 'styled-components';

interface HeaderProps {
  height: number;
  url: string;
}

export const ParallaxHeader = styled.div<HeaderProps>`
  background-image: url(${(props) => props.url});
  min-height: calc(${(props) => props.height}vh - 83px);
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;

  .component {
    z-index: 1;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
  }

  .color-overlay {
    width: 100%;
    height: calc(${(props) => props.height}vh - 83px);
    background: black;
    opacity: 0.4;
    position: absolute;
  }
`;
