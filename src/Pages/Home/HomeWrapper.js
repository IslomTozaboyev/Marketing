import styled from "styled-components";

const HomeWrapper = styled.div`
    .padding__my{
          padding: 183px  50px 0 190px;
     }
     .section__title{
        font-weight: bold;
        font-size: 50px;
        line-height: 82px;
        color: #1F1F1F;
    }
     .section__subtitle{
        font-weight: normal;
        font-size: 24px;
        line-height: 33px;
        color: #828282;
        margin-bottom: 120px !important;
      }

      .my__opacity{
          opacity: 1;
      }


    //home__styles
    .home{
        position: relative;
        background-image: linear-gradient(to right, #f58434, #f47332, #f36132, #f04d34, #ed3437);
        height: 1086px;

        .home__title{
            font-style: normal;
            font-weight: 900;
            font-size: 68px;
            line-height: 99px;
            color: #FFFFFF;
            position: relative;
            left: -150px;
        }

        .home__box{
            width: 1208px;
            height: 72px;   
            background: #FFFFFF;
            border-radius: 10px;
            padding: 0 10px; 

            .box__subtitle{
                height: 24px;

                &.my_border{
                    border-right: 1px solid #000000;
                }

                .box__desc{
                    border: none;
                    outline: none;
                    background-color: transparent;
                    font-weight: bold;
                    font-size: 18px;
                    line-height: 25px;
                    color: #111111;
                    width: 70%;
                }
                .date__input{
                    color: #777 !important;
                }
            }
        }
        .ps__box{
            position: absolute;
            bottom: -250px;
            left: 300px;
            width: 1250px;
            height: 382px;
            background: #FFFFFF;
            box-shadow: 0px 12px 68px rgba(0, 0, 0, 0.1);
            border-radius: 10px;
            text-align: center;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            padding: 0 80px;

            .ps__box__title{
                font-weight: bold;
                font-size: 60px;
                line-height: 82px;
                color: #1F1F1F;
            }
            .ps__box__subtitle{
                font-weight: normal;
                font-size: 18px;
                line-height: 25px;
                text-align: center;
                color: #000000;
            }
        }

    }

    /* services__styles */
    .services__section{
        margin-top: 200px;

        .services__text{
            .services__title{
                font-weight: bold;
                font-size: 60px;
                line-height: 82px;
                color: #1F1F1F;
            }
            .services__subtitle{
                font-weight: normal;
                font-size: 18px;
                line-height: 25px;
                color: #000000;  
            }
        }
        .services__boxes{
            margin-top: 50px;
            .services__box{
                .services__box__title{
                    font-weight: 600;
                    font-size: 24px;
                    line-height: 33px;
                    color: #000000;
                }
                .services__box__subtitle{
                    font-weight: normal;
                    font-size: 16px;
                    line-height: 22px;
                    color: #000000;
                }
            }
        }
        .services__photo{
            margin-left: 80px;
        }
    }

    /* swiper__section */
    .swiper__section{
        position: relative;

        .swiper__photo{
            transition: .5s;
        }
        .swiper__photo:hover{
            transform: scale(1.1);
            border-radius: 20px;

        }

        .my_swiper{
             padding-left: 187px;

            .swiper__title{
                font-weight: bold;
                font-size: 24px;
                line-height: 33px;
                color: #1F1F1F;
            } 
            .swiper__price{
                font-weight: normal;
                font-size: 24px;
                line-height: 33px;
                color: #1F1F1F;
            } 
        }
    }

    /* buy__price__data */
    .buy__prices{
            .buy__boxes{
                overflow: hidden;
            }
            .prices{
                transition: .5s;
                &::before {
                    content: "";
                    transition: 1s;
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                }
            }

            .prices:hover{
                cursor: pointer;
                transform: scale(1.08);
                &::before {
                    /* background: linear-gradient(180deg, rgba(22, 22, 22, 0) 0%, #161616 100%); */
                    box-shadow: inset  0 -50px 150px 0px #000;
                }
              
            }
            .buy__prices__title{
                position: absolute;
                bottom: 15px;
                left: 15px;
                font-weight: normal;
                font-size: 24px;
                line-height: 33px;
                color: #FFFFFF;
            }
    }


    /* gallery__styles */
    .big__gallery{
        height: 100vh;
        position: relative;
        padding: 0 185px;

        .images{
            margin-top: 80px;
            display: grid;
            grid-template-columns: repeat(12, minmax(0,1fr));
            gap: 30px;
         
            
            .gallery{
                width: 100%;
                height: 100%;
                transition: 0.5s;
                object-fit: cover;
                
                filter: grayscale();
                &:hover{
                  filter: none;
                  transform: scale(1.1);
                }
            }


            .aos-init{
               overflow: hidden;
               border-radius: 10px;

            }
            .aos-init:first-child {
              grid-column: span 5;
            }
            .aos-init:nth-child(2) {
              grid-column: span 3;
            }
            .aos-init:nth-child(3) {
              grid-column: span 4;
              grid-row: span 2;
            }
            .aos-init:nth-child(4) {
              grid-column: span 8;
            }
        }
    }


    /* contact__section */
    .contact__section{
        /* margin-top: 800px; */
        .contact__img1{
            position: absolute;
            top: 300px;
            left: 300px;
        }
        .contact__img2{
            position: absolute;
            top: 130px;
            left: 0px;
        }
        .eye{
            position: absolute;
            right: 22%;
            top: 42%;
            cursor: pointer;
        }
        .login{
            width: 517px;
            height: 647px;
            position: absolute;
            right: 230px;
            padding: 0 100px;
            .login__title{
                font-weight: bold;
                font-size: 30.3981px;
                line-height: 38px;
                color: #fff;
                margin: 80px 0 30px 0;
            }
            .my__input{
                background: #F8F8F8;
                border-radius: 8px;
                border: none;
                outline: none;
                width: 322px;
                height: 46px;
                padding: 0 10px;
                &::placeholder{
                    font-style: normal;
                    font-weight: 450;
                    font-size: 10.4222px;
                    line-height: 16px;
                    color: #171832;
                    opacity: 0.6;

                }
            }
            .label{
                font-weight: 500;
                font-size: 13.8963px;
                line-height: 18px;
                color: #FFFFFF;
            }
            .login__icon{
                width: 46px;
                height: 46px;
                cursor: pointer;
                transition: .5s;

                &:hover{
                    transform: scale(1.1);
                    transform: translateY(-10px);
                }
            }
        }
    }
`;
export default HomeWrapper;
