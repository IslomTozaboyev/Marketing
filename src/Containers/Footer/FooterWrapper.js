import styled from "styled-components";

const FooterWrapper = styled.div`
    .footer{
        height: 213px;
        left: 0px;
        background: #7D352F;
        color: #ffffff;
        margin-top: 800px;
        padding:  65px 0 0 187px;

        .footer__title{
            margin-right: 120px;
        }
        .footer__link{
            transition: .5s;
            &:hover{
                transform: scale(1.1);
            }
        }
        .footer__text{
            font-weight: 600;
            font-size: 18px;
            line-height: 25px;
            color: #FFFFFF;

           
        }
    }
`;
export default FooterWrapper;
