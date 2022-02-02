import styled from "styled-components";

const HeaderWrapper = styled.div`
        border-bottom: 1px solid #fff;
        
    .header{
        width: 100%;
        height: 90px;
        color: #fff;
        padding: 10px 235px 0 187px;


        .header__text__logo{
            font-weight: bold;
            font-size: 28px;
            line-height: 38px;  
        }

        .header__link{
            font-weight: 600;
            font-size: 18px;
            line-height: 25px; 
            padding: 0 35px;
            outline: none;
        }

        .language{
            width: 43px;
            height: 43px;
            border: 1px solid #fff;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            box-sizing: border-box;
        }
        .footer__link{
            font-weight: 600;
            font-size: 18px;
            line-height: 25px;
            color: #FFFFFF;
        }
    }
`;
export default HeaderWrapper;
