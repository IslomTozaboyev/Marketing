import React from "react";
import FooterWrapper from "./FooterWrapper";
import footer__icon1 from "../../img/icons/footer__link.png";
import footer__icon2 from "../../img/icons/footer__link2.png";
import footer__icon3 from "../../img/icons/footer__link3.png";
import { Slide } from "react-awesome-reveal";
import flykhiva__logo from "../../img/flykhiva__logo.svg";

const footer__links = [
  { duration: 1000, link: "/", text: "Home" },
  { duration: 1100, link: "/about", text: "About" },
  { duration: 1200, link: "/services", text: "Services" },
  { duration: 1300, link: "/news", text: "News" },
  { duration: 1400, link: "/gallery", text: "Gallery" },
  { duration: 1500, link: "/contacts", text: "Contacts" },
];

const Footer = () => {
  return (
    <FooterWrapper>
      <footer className="footer">
        <div className="row">
          <div className="col-12 col-md-6 d-flex">
            <Slide direction="up" duration={1000}>
              <img
                className="flykhiva__logo"
                src={flykhiva__logo}
                alt="flykhiva"
              />
            </Slide>

            <div className="row">
              {footer__links.length > 0 &&
                footer__links.map((value, index) => {
                  return (
                    <div key={index} className="col-12 col-md-4 mb-4 p-0">
                      <Slide direction="up" duration={value.duration}>
                        <a
                          href={value.link}
                          className="me-4 text-white footer__link"
                        >
                          {value.text}
                        </a>
                      </Slide>
                    </div>
                  );
                })}
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="d-flex flex-column align-items-center">
              <Slide direction="up" duration={1000}>
                <div
                  style={{ marginRight: "90px" }}
                  className="d-flex align-items-center"
                >
                  <img src={footer__icon1} alt="footer__icon" />
                  <p className="mb-1 footer__text">
                    {" "}
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
              </Slide>
              <div className="d-flex align-items-center mt-3">
                <Slide direction="up" duration={1000}>
                  <div className="mb-0 d-flex align-items-center">
                    <img src={footer__icon2} alt="footer__icon" />
                    <p className="mb-0 footer__text ms-2 me-5">
                      +998 90 000 00 00
                    </p>
                  </div>
                </Slide>
                <Slide direction="up" duration={1500}>
                  <div className="mb-0 d-flex align-items-center">
                    <img src={footer__icon3} alt="footer__icon" />
                    <p className="mb-0 footer__text ms-2">
                      flykhiva.uz@gmail.com
                    </p>
                  </div>
                </Slide>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </FooterWrapper>
  );
};

export default Footer;
