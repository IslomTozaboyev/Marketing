import React from 'react';
import { Link } from 'react-router-dom';
import HeaderWrapper from './HeaderWrapper';
import MyButton from "../../UI/Button/MyButton"
import { Fade, Slide, Zoom } from "react-awesome-reveal";


const headersData = [
    { duration: 300, to: "/", text: 'Home' },
    { duration: 400, to: "/about", text: 'About' },
    { duration: 500, to: "/services", text: 'Services' },
    { duration: 600, to: "/news", text: 'News' },
    { delay: 100, duration: 700, to: "/gallery", text: 'Gallery' },
    { delay: 120, duration: 800, to: "/contacts", text: 'Contacts' },
]

const Header = () => {
    return <HeaderWrapper>
        <Fade direction={"down"} cascade={false}>
            <div className='header d-flex align-items-center justify-content-between'>
                <h4 className="header__text__logo mb-0">Fly Khiva</h4>
                <div className='d-flex align-items-center'>
                    {headersData.length > 0 && headersData?.map((value) => {
                        return <Slide duration={value.duration} direction='down' delay={value.delay ? value.delay : ''}>
                            <Link to={value.to} key={value.to} className='fw-bold me-2 fs-5 mb-0 text-white header__link'>{value.text}</Link>
                        </Slide >
                    })}
                    <Slide direction='down' duration={900}>
                        <div className="language me-5">Eng</div>
                    </Slide>
                    <Slide direction='down' duration={1100} delay={10}>
                        <MyButton width="135px" height="43px">Book now</MyButton>
                    </Slide>
                </div>
            </div>
        </Fade>
    </HeaderWrapper>
};

export default Header;
