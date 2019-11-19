import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

// Import Images
import SanarLogo from '../../assets/images/logo.png';

// Import Style Components
import { Nav } from './style';

// Import Components
import NavbarMobile from './NavbarMobile';
import Button from '../Button';

const Navbar = () => {
  const [menu, setMenu] = useState<boolean>(false);
  return (
    <Nav>
      <section>
        <div className="container-flex">
          <div className="container-logo">
            <a href="/">
              <img src={SanarLogo} alt="sanar-logo" />
            </a>
          </div>
          <ul className="desktop">
            <li>
              <Link className="link" to="/">
                Início
              </Link>
            </li>
            <li>
              <Link className="link" to="/about">
                Sobre o Sanarflix
              </Link>
            </li>
          </ul>
        </div>
        <div className="desktop">
          <ul className="container-flex">
            <li>Pesquisa</li>
            <li>Entrar</li>
            <li>
              <Button
                text="Assine"
                link="/login"
                color="e73d3a"
                padding="0.3rem 1rem"
                size="16px"
              />
            </li>
          </ul>
        </div>
        <button
          type="button"
          onClick={() => setMenu(!menu)}
          className="hamburguer-menu"
        >
          <FontAwesomeIcon icon={menu ? faTimes : faBars} />
        </button>
      </section>
      {menu && <NavbarMobile />}
    </Nav>
  );
};

export default Navbar;
