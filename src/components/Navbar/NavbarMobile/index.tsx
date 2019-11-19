import React from 'react';
import { Link } from 'react-router-dom';

// Import Style
import { MenuList } from './style';

const MenuDropDown = () => (
  <MenuList className="hamburguer-menu--links">
    <li className="hamburguer-menu--item">
      <Link className="link" to="/">
        Início
      </Link>
    </li>
    <li className="hamburguer-menu--item">
      <Link className="link" to="/about">
        Sobre a Sanar
      </Link>
    </li>
    <li className="hamburguer-menu--item">Busque o seu curso</li>
    <li className="hamburguer-menu--item">
      <Link className="link" to="/">
        Entrar
      </Link>
    </li>
    <li className="hamburguer-menu--item">
      <Link className="link" to="/">
        Assine
      </Link>
    </li>
  </MenuList>
);

export default MenuDropDown;
