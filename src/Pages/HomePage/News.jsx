// import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from 'styled-components';
import { ResetStyle, Container ,A} from '../../components/globalStyle';
import { useTranslation } from 'react-i18next';
import React, { useState, useEffect } from 'react';

const NewsWrap = styled.div`
  padding: 80px 0;
`;

const NewsContainer = styled.div`
  max-width: 80%;
  margin: 0 auto;
`;

const NavTabs = styled.ul`
  list-style: none;
  margin-bottom: 45px;
  width: 100%;
  border-bottom: 1px solid #cccccc;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const NavItem = styled.li`
  margin: 0;
  width: 160px;
  text-align: center;
  margin-bottom: -1px;
`;

const NavLink = styled.a`
  width: 100%;
  font-size: 20px;
  padding: 20px 10px;
  border: none;
  border-bottom: 1px solid transparent;
  font-weight: bold;
  zoom: 1;
  transition: 0.3s linear;
  display: block;

  &:hover, &.active {
    color: #DE052E;
    background: none;
    border-bottom: 1px solid #DE052E;
    zoom: 1;
    transition: 0.3s linear;
  }
`;

const NewsSpan = styled.span`
  display: block;
  margin: 0 15px;
`;

const NewsImage = styled.img`
  display: block;
  width: 100%;
`;

const Date = styled.span`
  color: #999;
  margin-top: 10px;
`;

const Title = styled.span`
  font-size: 22px;
  margin-top: 10px;
  line-height: 140%;
  max-height: 70px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

const TabContent = styled.div`
  .slick-dots li button::before {
    top: 30px !important;
  }
`;

const MoreArticles = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 120px;
`;

const RedButton = styled.a`
  padding: 20px;
  background: #DE052E;
  border-radius: 40px;
  width: 210px;
  display: block;
  text-align: center;
  color: #fff !important;
  border: 1px solid transparent;
  zoom: 1;
  transition: .3s linear;
  cursor: pointer;
`;



const MyNewsSlider = () => {
    const { t } = useTranslation();

    // 响应式设置
const [responsiveSettings, setResponsiveSettings] = useState({
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
});

useEffect(() => {
  function handleResize() {
    // 根据屏幕宽度更改 slidesToShow 值
    if (window.innerWidth < 820) {
      setResponsiveSettings({ ...responsiveSettings, slidesToShow: 2 });
    } else {
      setResponsiveSettings({ ...responsiveSettings, slidesToShow: 3 });
    }
  }

  // 监听窗口大小变化
  window.addEventListener('resize', handleResize);

  // 初始化时设置 slidesToShow 值
  handleResize();

  return () => {
    // 清除窗口大小变化的监听
    window.removeEventListener('resize', handleResize);
  };
}, [responsiveSettings]);

    return (
        <div className='News-section'>
            <ResetStyle />
            <NewsWrap>
                <NewsContainer>
                    <Container>
                        <NavTabs>
                            <NavItem>
                                <NavLink href="#" className="nav-link active">{t("NewsMsg")}</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#" className="nav-link">{t("NewsMda")}</NavLink>
                            </NavItem>
                        </NavTabs>

                        <TabContent>
                            <Slider {...responsiveSettings}>
                                <A>
                                <NewsSpan>
                                    <NewsImage src="https://www.wowprime.com/images/kkcontent_thumbs/thumb_107_883_1694595842_230913_picnic00.jpg" alt="" />
                                    <Date>2023/09/13</Date>
                                    <Title>{t("NewsSlideA")}</Title>
                                </NewsSpan>
                                </A>
                                <A>
                                <NewsSpan>
                                    <NewsImage src="https://www.wowprime.com/images/kkcontent_thumbs/thumb_107_884_1694669838_2023tb.png" alt="" />
                                    <Date>2023/09/01</Date>
                                    <Title>{t("NewsSlideB")}</Title>
                                </NewsSpan>
                                </A>
                                <A>
                                <NewsSpan>
                                    <NewsImage src="https://www.wowprime.com/images/kkcontent_thumbs/thumb_107_839_1685703665_wowprime_banner_wp_site_650-650_b.jpg" alt="" />
                                    <Date>2023/06/05</Date>
                                    <Title>{t("NewsSlideC")}</Title>
                                </NewsSpan>
                                </A>
                                <A>
                                <NewsSpan>
                                    <NewsImage src="https://www.wowprime.com/images/kkcontent_thumbs/thumb_107_828_1683602208_2023_102bn.jpg" alt="" />
                                    <Date>2023/05/02</Date>
                                    <Title>{t("NewsSlideD")}</Title>
                                </NewsSpan>
                                </A>
                            </Slider>
                        </TabContent>
                        <MoreArticles>
                            <RedButton href="#" className="red-btn">{t("NewsBtn")}</RedButton>
                        </MoreArticles>
                    </Container>
                </NewsContainer>
            </NewsWrap>
        </div>
    );
};

export default MyNewsSlider;
