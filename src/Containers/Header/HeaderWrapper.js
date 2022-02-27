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
      width: 250px;
      height: 100vh;
      position: absolute;
      top: 0;
      left: -100%;
      background-color: #d2c7f5;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      transition: 0.8s;
      overflow: hidden;
      z-index: 1001 !important;

      &.active {
        position: absolute;
        top: 0;
        left: 0;
      }

      .times {
        position: absolute;
        top: 1%;
        right: 5%;
      }

      .mediaLeft__content__logo {
        position: absolute;
        top: 2%;
        left: 10%;
      }

      .mediaLeft__content__box {
      }
      .mediaLeft__content__link {
        color: #fff;
        padding: 15px 0;
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
    .language {
      display: none !important;
    }
  }
`;
export default HeaderWrapper;
