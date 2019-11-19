import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');
  @import url('https://fonts.googleapis.com/css?family=Raleway&display=swap');
  @import url('https://fonts.googleapis.com/css?family=Nunito+Sans&display=swap');

  *{
    font-family: 'Raleway', sans-serif;
    outline: none;
    list-style: none;
    text-decoration: none !important;
  }

  body, html{
    overflow-x: hidden;
  }

  ul{
    display: flex;
  }

  li{
    margin: 0 0.5rem;
  }

  .link {
    color: white;
    font-size: 18px;
  }

  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    overflow-x: hidden;
  }

  h1{
    margin: 0;
    font-family: "Montserrat";
    font-size: 61px;
    font-weight: bold;
    color: #fff !importante;
    text-align: center;
    line-height: 67px;
    width: 95%;
    max-width: 889px;
  }

  h4{
    margin: 2rem;
    font-family: "Montserrat";
    font-size: 20px;
    color: #fff !importante;
    text-align: center;
    line-height: 27px;
    max-width: 687px;
  }

  .overlay {
    background-color: SlateGray;
    position:relative;
    width: 100%;
    height: 100%;
    opacity: 0.20;
    -moz-opacity: 20%;
    -webkit-opacity: 20%;
    z-index: 2;
  }

  span, a, p, h1, h2, h3, h4{
    font-family: Nunito Sans;
  }

  .title{
    color: white !important;
  }
  
  .slick-slide:hover{
    transform: scale(1.2);
  }

  .space{
    margin: 2rem 0;
  }

`;
