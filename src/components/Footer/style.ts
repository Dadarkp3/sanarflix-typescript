import styled from 'styled-components';

export const Container = styled.footer`
  border: solid 1px #edf1f2;
  vertical-align: middle;
  padding-top: 50px;
  margin-top: 4rem;

  .links {
    display: flex;
    flex-flow: column;
    align-items: center;
    border-bottom: solid 1px #d5e0e3;
  }

  .text {
    text-align: center;
    padding: 23px 0px;
    color: #6e797d;

    a {
      color: #6e797d;
      margin-left: 15px;
    }
  }

  .link {
    margin: 10px;
    color: #34393b;
    span {
      font-size: 15px;
      line-height: 36px;
      width: 11px;
      text-align: center;
      background: #2472ea;
      border-radius: 50%;
      color: #ffffff;
      padding: 8px 11px;
      margin: 0 10px 0 0;
    }
  }

  .social {
    color: black !important;
    font-size: 35px;
    margin: 1rem;
    a {
      margin: 1rem;
    }

    .svg-inline--fa {
      color: #000000d9;
    }
  }

  @media (max-width: 768px) {
    .links-flex {
      display: flex;
      flex-flow: column;
      margin-bottom: 10px;
    }
  }
`;
