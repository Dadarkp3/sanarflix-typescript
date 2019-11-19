import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface Props {
  text: string;
  color: string;
  padding: string;
  size: string;
}

export const ButtonDefault = styled(Link)<Props>`
  background: #${(props) => (props.color === 'transparent' ? 'trasparent' : props.color)};
  border: ${(props) => (props.color === 'transparent' ? '3px solid white' : '0')};
  color: #ffffffdb;
  font-size: ${(props) => props.size};
  padding: ${(props) => props.padding};
  border-radius: 20px;
  cursor: pointer;
  width: 20vw;
  margin: 1rem;
  text-align: center;
  min-width: 200px;
  max-width: 400px;
  white-space: nowrap;
  transition: background-color 0.3s;
  box-shadow: 0 2px 8px 0 #${(props) => props.color}de;
  :hover {
    color: white;
  }
`;
