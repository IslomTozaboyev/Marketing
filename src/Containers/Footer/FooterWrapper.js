import styled from "styled-components";

const FooterWrapper = styled.div`
  .footer {
    height: 213px;
    left: 0px;
    background: #7d352f;
    color: #ffffff;
    margin-top: 100px;
    padding: 65px 0 0 187px;

    .flykhiva__logo {
      width: 119px;
      height: 46px;
      margin-right: 120px;
    }

    .footer__link {
      transition: 0.5s;
      &:hover {
        transform: scale(1.1);
      }
    }
    .footer__text {
      font-weight: 600;
      font-size: 18px;
      line-height: 25px;
      color: #ffffff;
    }
  }
  @media screen and (max-width: 1500px) {
    .footer {
      padding: 65px 0 0 100px !important;
    }
    .flykhiva__logo {
      margin-right: 80px;
    }
  }
  @media screen and (max-width: 1000px) {
    .footer {
      padding: 65px 0 0 100px !important;
    }
    .flykhiva__logo {
      margin-right: 60px;
    }
  }
`;
export default FooterWrapper;
