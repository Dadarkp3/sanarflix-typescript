import styled from 'styled-components';
import { device } from '../../../utils/device';

export const MenuList = styled.ul`
  margin: 0;
  list-style: none;
  text-align: center;
  color: white;
  padding: 0.4rem;
  flex-flow: column;

  .hamburguer-menu--item {
    padding: 0.5rem;
    width: 100%;
  }

  @media ${device.tablet} {
    display: none;
  }
`;
