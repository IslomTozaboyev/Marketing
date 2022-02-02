import React from 'react';
import { Link } from 'react-router-dom';
import HeaderWrapper from './HeaderWrapper';
import MyButton from "../../UI/Button/MyButton"
import { Fade } from "react-awesome-reveal";


const headersData = [
    { duration: 300, to: "/", text: 'Home' },
    { duration: 400, to: "/about", text: 'About' },
    { duration: 500, to: "/services", text: 'Services' },
    { duration: 600, to: "/news", text: 'News' },
    { duration: 700, to: "/gallery", text: 'Gallery' },
    { duration: 800, to: "/contacts", text: 'Contacts' },
]

const Header = () => {
    return <HeaderWrapper>
        <Fade direction={"down"} cascade={false}>
            <div className='header d-flex align-items-center justify-content-between'>
                <h4 className="header__text__logo mb-0">Fly Khiva</h4>
                <div className='d-flex align-items-center'>
                    {headersData.length > 0 && headersData?.map((value) => {
                        return <div
                            data-aos-duration={value.duration}
                            data-aos="fade-down"
                            key={value.to}
                        >
                            <Link to={value.to} className='fw-bold me-2 fs-5 mb-0 text-white header__link'>{value.text}</Link>
                        </div >
                    })}
                    <div
                        data-aos-duration={800}
                        data-aos="fade-down"
                    >
                        <div className="language me-5">Eng</div>
                    </div>
                    <div
                        data-aos="fade-down"
                        data-aos-duration={800}
                        data-aos-delay={100}
                    >
                        <MyButton width="135px" height="43px">Book now</MyButton>
                    </div>
                </div>
            </div>
        </Fade>
    </HeaderWrapper>
};

export default Header;
