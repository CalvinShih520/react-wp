import React from 'react';
import styled from 'styled-components';

const Wrap = styled.div`
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

const Position = styled.div`
      position: absolute;
      left: 5%;
      right: 5%;
      color: #fff;
      z-index: 99;
`;

const Title = styled.p`
    font-family: Noto Serif TC;
    font-size: 50px;
    position: relative;
    padding-bottom: 20px;
    margin-bottom: 25px;
    line-height: 130%;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
    letter-spacing: 3px;

    @media (max-width: 992px){
        font-size: 40px;
        padding-bottom: 15px;
        margin-bottom: 0px;
        line-height: 100%;
    }
    @media (max-width: 768px){
        font-size: 30px;
        padding-bottom: 20px;
    }
    @media (max-width: 540px){
        font-size: 14px;
        padding-bottom: 0px;
    }

`;

const Subtitle = styled.p`
    font-size: 20px;
    line-height: 150%;

    @media (max-width: 992px){
        font-size: 16px;
        line-height: 100%;
    }
    @media (max-width: 768px){
        font-size: 14px;
    }
    @media (max-width: 540px){
        font-size: 12px;
    }
`;

const Banner = () => {

    return(
        <div className='Banner-section'>
            <Wrap>
                <Position>
                    <Title>關於王品-企業概況與沿革</Title>
                    <Subtitle>創造與提供顧客多元餐飲服務及產品，時刻傳遞溫度，豐富美好生活。</Subtitle>
                </Position>
                <div>
                    <img src="https://www.wowprime.com/uploads/banner/about-banner-1.jpg" alt="about banner 1" />
                </div>
            </Wrap>
        </div>
    );
}

export default Banner;