import styled from "styled-components";

const HeaderWrapper = styled.div`
  border-bottom: 1px solid #fff;

  .header {
    width: 100%;
    height: 90px;
    color: #fff;
    padding: 10px 235px 0 187px;

    .flykhiva__logo {
      width: 126px;
      height: 50px;
    }

    .header__text__logo {
      font-weight: bold;
      font-size: 28px;
      line-height: 38px;
    }

    .header__link {
      font-weight: 600;
      font-size: 18px;
      line-height: 25px;
      padding: 0 35px;
      outline: none;
    }

    .language {
      width: 43px;
      height: 43px;
      border: 1px solid #fff;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      box-sizing: border-box;
    }
    .footer__link {
      font-weight: 600;
      font-size: 18px;
      line-height: 25px;
      color: #ffffff;
    }
    .bars {
      display: none;
    }

    .mediaLeft__content {
      position: fixed;
      top: -200%;
      left: 0;
      width: 100%;
      height: 10vh;
      background-color: #d2c7f5;
      transition: 0.8s;
      z-index: 1001 !important;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 50px;

      &.active {
        position: fixed;
        top: 0;
        left: 0;
      }

      .close {
        position: absolute;
        top: 1%;
        right: 1%;
        font-size: 30px;
        font-weight: bold;
      }

      .mediaLeft__content__box {
        display: inline-block !important;
        text-align: center;
      }

      .mediaLeft__content__logo {
        width: 200px;
        height: 50px;
        /* position: absolute;
        top: 2%;
        left: 10%; */
      }
      .mediaLeft__content__link {
        color: #fff;
        padding: 15px 0;
        font-size: 22px;
      }
    }
  }

  @media screen and (max-width: 1700px) {
    .header {
      padding: 10px 150px 0 200px;
    }
    .header__link {
      padding: 0 30px !important;
    }
  }
  @media screen and (max-width: 1500px) {
    .header {
      padding: 10px 120px 0 120px;
    }
    .header__link {
      padding: 0 25px !important;
    }
  }
  @media screen and (max-width: 1300px) {
    .header {
      padding: 10px 100px 0 100px;
    }
    .header__link {
      padding: 0 15px !important;
    }
  }
  @media screen and (max-width: 1200px) {
    .links {
      display: none;
    }
    .bars {
      display: block !important;
    }
  }
  @media screen and (max-width: 900px) {
    .header {
      padding: 10px 80px 0 80px;
    }
    .language {
      display: none !important;
    }
  }

  @media screen and (max-width: 700px) {
    .header {
      padding: 10px 50px 0 50px;
    }
    .mediaLeft__content {
      padding: 0 30px !important;
    }
    .mediaLeft__content__logo {
      width: 180px !important;
      height: 40px !important;
    }
    .mediaLeft__content__link {
      font-size: 18px !important;
    }
  }
  @media screen and (max-width: 600px) {
    .mediaLeft__content {
      padding: 0 15px !important;
    }
    .mediaLeft__content__logo {
      width: 160px !important;
      height: 35px !important;
    }
    .mediaLeft__content__link {
      font-size: 17px !important;
    }
    .six {
      display: none;
    }
    .header__button {
      display: none;
    }
  }
  @media screen and (max-width: 500px) {
    .mediaLeft__content {
      padding: 0 5px !important;
      height: 12vh !important;
    }
    .five {
      display: none;
    }
  }
  @media screen and (max-width: 400px) {
    .mediaLeft__content {
      height: 11vh !important;
    }
    .mediaLeft__content__logo {
      width: 160px !important;
      height: 35px !important;
    }
    .mediaLeft__content__link {
      font-size: 16px !important;
    }
    .four {
      display: none;
    }
  }
  @media screen and (max-width: 375px) {
    .mediaLeft__content {
      height: 14vh !important;
    }
    .mediaLeft__content__logo {
      width: 160px !important;
      height: 35px !important;
    }
    .mediaLeft__content__link {
      font-size: 16px !important;
    }
    .four {
      display: none;
    }
  }
`;
export default HeaderWrapper;
