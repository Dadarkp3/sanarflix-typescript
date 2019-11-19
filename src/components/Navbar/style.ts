import styled from 'styled-components';
import { device } from '../../utils/device';

export const Nav = styled.nav`
  background: rgba(12, 29, 41, 0.9);
  padding: 1rem;
  z-index: 1050;

  section {
    display: flex;
    color: white;
    justify-content: space-between;
    align-items: center;
  }

  img,
  container-logo {
    width: 100px;
    @media ${device.tablet} {
      width: 120px;
    }
  }

  .hamburguer-menu {
    color: white;
    background: none;
    border: 0;
    font-size: 1.5rem;
    @media ${device.tablet} {
      display: none;
    }
  }

  .container-flex {
    display: flex;
    align-items: center;
  }

  .desktop {
    display: none;

    @media ${device.tablet} {
      display: flex;
    }
  }
`;
