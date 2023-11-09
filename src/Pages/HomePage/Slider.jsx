import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import './index.css';
import styled from 'styled-components';
import {ResetStyle} from '../../components/globalStyle';

const SliderContainer = styled.div`
  padding-top: 80px;

  .slick-next{
    display: none !important;
    right: 0px !important;
  }
  

  .slick-dots li button::before {
    top: -50px !important;
  }

  .slick-dots li.slick-active button::before {
    color: white !important;
  }
`;

const Wrap = styled.div`
  width: 100%;
`;

const WrapImg = styled.img`
  width: 100%;
`;

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
};

const MySlider  = () => {
  return (
    <div className='Slide-Section'>
        <ResetStyle />
        <SliderContainer>
        <Slider {...settings}>
            <Wrap>
            <WrapImg src="https://www.wowprime.com/images/kkcontent_thumbs/thumb_101_746_1674034827_30_pc02.jpg" alt="" />
            </Wrap>
            <Wrap>
            <WrapImg src="https://www.wowprime.com/images/kkcontent_thumbs/thumb_101_18_1654569662_01.jpg" alt="" />
            </Wrap>
            <Wrap>
            <WrapImg src="https://www.wowprime.com/images/kkcontent_thumbs/thumb_101_19_1654571388_02.jpg" alt="" />
            </Wrap>
        </Slider>
        </SliderContainer>
        
    </div>
  );
};

export default MySlider ;
