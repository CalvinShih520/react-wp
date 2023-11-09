import styled from 'styled-components';
import { ResetStyle, Container, Row, A } from '../../components/globalStyle';
import Slider from 'react-slick';
import { useTranslation } from 'react-i18next';
import React, { useState, useEffect } from 'react';

const HomeBrands = styled.div`
  margin-top: 150px;
  padding: 100px 0 50px 0;
  background: url(https://www.wowprime.com/templates/cadiis/images/ui/home-brands-bg.jpg) no-repeat top center;


`;

const Title = styled.div`
  color: #fff;
  font-size: 40px;
  padding-bottom: 25px;
  text-align: center;
  line-height: 140%;
`;

const SubTitle = styled.div`
  font-size: 18px;
  color: #fff;
  text-align: center;
  margin-bottom: 80px;
  line-height: 140%;
`;

const BrandsSlider = styled(Slider)`
  .slick-next{
    right: 0px;
    display: none !important;
  }
  .wrap-img {
    width: 144px;
  }

  .slick-dots li button:before {
    color: #d8d8d8;
  }

  .slick-dots li.slick-active button:before {
    color: #fff;
  }
`;

const MySlider = () => {
    const { t } = useTranslation();
    
    const [slidesToShow, setSlidesToShow] = useState(7); // 默认值

  useEffect(() => {
    const handleResize = () => {
      // 根据屏幕宽度设置slidesToShow的值
      if (window.innerWidth < 1024) {
        setSlidesToShow(3);
      }  else {
        setSlidesToShow(7);
      }
    };

    // 添加窗口大小变化的侦听器
    window.addEventListener('resize', handleResize);

    // 初始加载时执行一次以设置初始值
    handleResize();

    // 在组件卸载时删除侦听器
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const settingsBrands = {
    dots: true,
    infinite: true,
    slidesToShow: slidesToShow, // 使用状态变量的值
    slidesToScroll: 2,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };

  return (
    <div className='Brands-section'>
        <ResetStyle />
    <HomeBrands>
      <Title>{t("BrandA")}</Title>
      <SubTitle>{t("BrandB")}</SubTitle>
      <BrandsSlider {...settingsBrands}>
        <div className="wrap">
          <img className="wrap-img" src="https://www.wowprime.com/images/cgcustom/img020220801153255.png" alt="" />
        </div>
        <div className="wrap">
          <img className="wrap-img" src="https://www.wowprime.com/images/cgcustom/img020220530095140.png" alt="" />
        </div>
        <div className="wrap">
          <img className="wrap-img" src="https://www.wowprime.com/images/cgcustom/img020221017110455.png" alt="" />
        </div>
        <div className="wrap">
          <img className="wrap-img" src="https://www.wowprime.com/images/cgcustom/img020220530092716.png" alt="" />
        </div>
        <div className="wrap">
          <img className="wrap-img" src="https://www.wowprime.com/images/cgcustom/img020220513093814.png" alt="" />
        </div>
        <div className="wrap">
          <img className="wrap-img" src="https://www.wowprime.com/images/cgcustom/img020220530092229.png" alt="" />
        </div>
        <div className="wrap">
          <img className="wrap-img" src="https://www.wowprime.com/images/cgcustom/img020220905103445.png" alt="" />
        </div>
        <div className="wrap">
          <img className="wrap-img" src="https://www.wowprime.com/images/cgcustom/img020220620145147.png" alt="" />
        </div>
        <div className="wrap">
          <img className="wrap-img" src="https://www.wowprime.com/images/cgcustom/img020220513094346.png" alt="" />
        </div>
        <div className="wrap">
          <img className="wrap-img" src="https://www.wowprime.com/images/cgcustom/img020220513093112.png" alt="" />
        </div>
        <div className="wrap">
          <img className="wrap-img" src="https://www.wowprime.com/images/cgcustom/img020220513094035.png" alt="" />
        </div>
        <div className="wrap">
          <img className="wrap-img" src="https://www.wowprime.com/images/cgcustom/img020220720171125.png" alt="" />
        </div>
      </BrandsSlider>
    </HomeBrands>
    </div>
  );
};

export default MySlider;
