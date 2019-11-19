/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faInstagram,
  faFacebook,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import {
  faUserFriends,
  faEnvelopeOpenText,
  faPaperPlane,
  faAlignLeft,
} from '@fortawesome/free-solid-svg-icons';
import { Container } from './style';

const Footer = () => (
  <Container>
    <div className="links">
      <div className="links-flex">
        <Link className="link" to="/">
          <span>
            <FontAwesomeIcon icon={faUserFriends} />
          </span>
          Sobre o Sanarflix
        </Link>
        <Link className="link" to="/">
          <span>
            <FontAwesomeIcon icon={faEnvelopeOpenText} />
          </span>
          Fale Conosco
        </Link>
        <Link className="link" to="/">
          <span>
            <FontAwesomeIcon icon={faPaperPlane} />
          </span>
          Perguntas Frequentes
        </Link>
        <a className="link" href="https://www.sanarmed.com/" target="_blank">
          <span>
            <FontAwesomeIcon icon={faAlignLeft} />
          </span>
          Conteúdos de Medicina
        </a>
      </div>
      <div className="social">
        <a
          href="https://www.instagram.com/sanarflix.med/?hl=pt-br"
          target="_blank"
        >
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href="https://www.facebook.com/sanarflix.med/" target="_blank">
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a
          href="https://www.youtube.com/channel/UC9nRs5w7Qk-kUZqlryrasjA"
          target="_blank"
        >
          <FontAwesomeIcon icon={faYoutube} />
        </a>
      </div>
    </div>
    <div className="text">
      © SanarFlix 2019 - Todos os Direitos Reservados
      <a
        target="_blank"
        href="https://plataforma-sanarflix.s3-sa-east-1.amazonaws.com/Sanar-TermosdeUsoePoli%CC%81ticadePrivacidade-Sanarflix-v62019-05-03.pdf"
      >
        Termos de Uso
      </a>
    </div>
  </Container>
);

export default Footer;
