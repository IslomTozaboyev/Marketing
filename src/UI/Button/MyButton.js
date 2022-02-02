import React from 'react';
import styled from 'styled-components';

const MyButtonWrapper = styled.div`
    .button{
        background: #FFB300;
        color: #fff;
        border-radius: 10px;
        border: none;
        font-weight: 600;
        font-size: 18px;
        line-height: 25px;  
    }
`;


const MyButton = ({ children, width, height, className }) => {
    return <MyButtonWrapper>
        <button style={{ width: width, height: height }} className={`button ${className && className}`}>{children}</button>
    </MyButtonWrapper>
};

export default MyButton;
