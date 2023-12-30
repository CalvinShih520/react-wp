import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next'; 

const StyledWrap = styled.div`
    padding-top: 80px;
    display: flex;
    align-items: center;
    overflow: hidden;
    position: relative;
    
    img{
        filter: brightness(0.7);
        max-width: 100%;
    }
`;

const StyledPosition = styled.div`
    position:absolute ;
    left: 5%;
    right: 5%;
    color: #fff;
    z-index: 99;
`;

const StyledTitle = styled.p`
    font-family: Noto Serif TC;
    font-size: 50px;
    position: relative;
    padding-bottom: 20px;
    margin-bottom: 25px;
    line-height: 130%;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
    letter-spacing: 3px;

    &::after{
        content: "";
        width: 75px;
        height: 1px;
        background: #fff;
        position: absolute;
        left: 0;
        bottom: 0;
    }

    @media (max-width: 1024px) {
        font-size: 35px;
        padding-bottom: 10px;
        margin-bottom: 15px;

    }
    @media (max-width: 768px) {
        font-size: 25px;
        padding-bottom: 5px;
        margin-bottom: 5px;

    }
    @media (max-width: 576px) {
        font-size: 15px;
        padding-bottom: 0px;
        margin-bottom: 0px;
    }
`;

const StyledSubTitle = styled.p`
    font-size: 20px;
    line-height: 150%;
`;

const Banner = () => {
    const { t } = useTranslation(); 

    return(
        <div className='Banner-section'>
            <StyledWrap>
                <StyledPosition>
                    <StyledTitle>{t("InterestedBannerTitle")}</StyledTitle>
                    <StyledSubTitle>{t("InterestedBannerSubTitle")}</StyledSubTitle>
                </StyledPosition>
                <p>
                    <img src="https://www.wowprime.com/uploads/banner/finance-banner.jpg" alt="" />
                </p>
            </StyledWrap>
        </div>
    );
}

export default Banner;