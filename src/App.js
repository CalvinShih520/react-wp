import React, { useState } from 'react'
import HomePage from './Pages/HomePage/HomePage';
import About from './Pages/About/About';
import Map from './Pages/Map';
import Resbility from './Pages/Resbility';
import Interested from './Pages/Interested';
import Newscenter from './Pages/Newscenter';
import Recruiting from './Pages/Recruiting';
//import {Route,Link} from 'react-router-dom';
import { Routes, Route, Link ,NavLink} from 'react-router-dom';
import styled from 'styled-components';
import './index.css';
import "./i18n";
import { useTranslation, Trans } from "react-i18next";
import { UnorderedListOutlined } from '@ant-design/icons';

const UlChild = styled.ul`
      padding: 30px;
      margin: 0;
      position: absolute;
      left: -50px;
      opacity: 0;
      /* visibility: hidden; */
      min-width: 225px;
      background: rgba(0, 0, 0, 0.7);
      z-index: 9999;
      zoom: 1;
      transition: 0.3s linear;
      font-size: 80%;
      font-weight: 400;

      &:hover{
        opacity: 1;
      }

      
`;

const LlChild = styled.li`

`;

const AChild = styled.a`
      display: block;
      padding: 15px 0 !important;
      text-decoration: none;
      font-size: 16px;
      zoom: 1;
      transition: 0.3s linear;
      color: #fff;

      &:hover{
        color: #DE052E;
      }
`;



const Header = () => {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const [isLangListOpen, setLangListOpen] = useState(false);

  const toggleLangList = () => {
    setLangListOpen(!isLangListOpen);
  };

  const changeLng = (lng) => {
    // 假设 i18n 是通过 props 传递进来的
    // i18n.changeLanguage 可能是来自 i18n 库或国际化框架
    i18n.changeLanguage(lng);
  };

  return (
    <div>
      <StyledHeader>
        <StyledContainer>
          <StyledLogo>
            <Link to='/react-wp' style={{ textDecoration: 'none' }}><span>王品集團</span></Link>
          </StyledLogo>
          <StyledMainmenu>
            <button onClick={toggleMenu} style={{ background: '#DE052E', color: 'white' }}>
              <UnorderedListOutlined />
            </button>
            {isMenuOpen ? (
              <div className="mobile-menu">
                <ul className="link-block">
                  <li><Link to="/react-wp/about">{t("AboutWowPrime")}</Link></li>
                  <li><Link to="/react-wp/map">{t("MapWowPrime")}</Link></li>
                  <li><Link to="/react-wp/resbility">{t("responsibilityWowPrime")}</Link></li>
                  <li><Link to="/react-wp/interested">{t("RelevantWowPrime")}</Link></li>
                  <li><Link to="/react-wp/newscenter">{t("NewsWowPrime")}</Link></li>
                  <li><Link to="/react-wp/recruiting">{t("recruitWowPrime")}</Link></li>
                </ul>
              </div>
            ) : (
              <ul className="nav">
                <li><NavLink  activeClassName="active" className="navLink"  to="/react-wp/about">{t("AboutWowPrime")}</NavLink >
                  <UlChild>
                    <LlChild>
                      <AChild href="#">企業概況與沿革</AChild>
                    </LlChild>
                    <LlChild>
                      <AChild href="#">經營理念與核心價值觀</AChild>
                    </LlChild>
                    <LlChild>
                      <AChild href="#">聯絡我們</AChild>
                    </LlChild>
                  </UlChild>
                </li>
                <li><NavLink  activeClassName="active" className="navLink"  to="/react-wp/map">{t("MapWowPrime")}</NavLink >
                  <UlChild>
                    <LlChild>
                      <AChild href="#">品牌發展與版圖</AChild>
                    </LlChild>
                    <LlChild>
                      <AChild href="#">紙本票券專區</AChild>
                    </LlChild>
                  </UlChild>
                </li>
                <li><NavLink  activeClassName="active" className="navLink"  to="/react-wp/resbility">{t("responsibilityWowPrime")}</NavLink >
                  <UlChild>
                    <LlChild>
                      <AChild href="#">CSR管理</AChild>
                    </LlChild>
                    <LlChild>
                      <AChild href="#">永續治理</AChild>
                    </LlChild>
                    <LlChild>
                      <AChild href="#">綠色採購</AChild>
                    </LlChild>
                    <LlChild>
                      <AChild href="#">安心食品</AChild>
                    </LlChild>
                    <LlChild>
                      <AChild href="#">友善環境</AChild>
                    </LlChild>
                    <LlChild>
                      <AChild href="#">幸福職場</AChild>
                    </LlChild>
                    <LlChild>
                      <AChild href="#">社會共融</AChild>
                    </LlChild>
                    <LlChild>
                      <AChild href="#">CSR報告</AChild>
                    </LlChild>
                  </UlChild>
                </li>
                <li><NavLink  activeClassName="active" className="navLink"  to="/react-wp/interested">{t("RelevantWowPrime")}</NavLink >
                  <UlChild>
                    <LlChild>
                      <AChild href="#">投資人專區</AChild>
                    </LlChild>
                    <LlChild>
                      <AChild href="#">供應商平台</AChild>
                    </LlChild>
                    <LlChild>
                      <AChild href="#">店舖租賃區</AChild>
                    </LlChild>
                  </UlChild>
                </li>
                <li><NavLink  activeClassName="active" className="navLink"  to="/react-wp/newscenter">{t("NewsWowPrime")}</NavLink >
                  <UlChild>
                    <LlChild>
                      <AChild href="#">各界肯定</AChild>
                    </LlChild>
                    <LlChild>
                      <AChild href="#">媒體報導</AChild>
                    </LlChild>
                    <LlChild>
                      <AChild href="#">集團訊息</AChild>
                    </LlChild>
                  </UlChild>
                </li>
                <li><NavLink  activeClassName="active" className="navLink"  to="/react-wp/recruiting">{t("recruitWowPrime")}</NavLink >
                  <UlChild>
                    <LlChild>
                      <AChild href="#">加入王品</AChild>
                    </LlChild>
                    <LlChild>
                      <AChild href="#">同仁專區</AChild>
                    </LlChild>
                  </UlChild>
                </li>
              </ul>
            )}
          </StyledMainmenu>
          <StyledLanguage>
            <StyledLangChoose onClick={toggleLangList} />
            {isLangListOpen && (
              <StyleLangList>
                <div className="trangle"></div>
                <ul className="lang-block">
                  <li>
                    <a href="#" onClick={() => changeLng('zh')}>中文</a>
                  </li>
                  <li>
                    <a href="#" onClick={() => changeLng('en')}>英文</a>
                  </li>
                </ul>
              </StyleLangList>
            )}
          </StyledLanguage>
          <StyledSerchBtn>
            <p>
              <a href="#">
                <StyledImg src="https://www.wowprime.com/uploads/home/search-btn.svg" alt="" />
              </a>
            </p>
          </StyledSerchBtn>
        </StyledContainer>
      </StyledHeader>



      <Routes>
        <Route path='/react-wp' exact Component={HomePage} />
        <Route path='/react-wp/about' exact Component={About} />
        <Route path='/react-wp/map' exact Component={Map} />
        <Route path='/react-wp/resbility' exact Component={Resbility} />
        <Route path='/react-wp/interested' exact Component={Interested} />
        <Route path='/react-wp/newscenter' exact Component={Newscenter} />
        <Route path='/react-wp/recruiting' exact Component={Recruiting} />
      </Routes>

    </div>
  );
};

const StyledHeader = styled.div`
    background: #DE052E;
    position: fixed;
    height: 80px;
    width: 100%;
    top: 0;
    z-index: 999;
    padding: 8px 16px;
    
`
const StyledContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  max-width: 1140px;

  @media (min-width:576px){
    max-width: 540px;
    }
  @media (min-width:768px){
    max-width: 720px;
    }
  @media (min-width:992px){
    max-width: 960px;
    }
  @media (min-width:1200px){
    max-width: 1140px;
    }
  @media (min-width:1600px){
    max-width: 1400px;
  }
`

const StyledLogo = styled.div`
  width: 225px;
  height: 45px;
  padding: 0;
  margin: 0;
  position: absolute;
  left: 15px;
  top: 15px;
  background: url(https://www.wowprime.com/templates/cadiis/images/ui/logo.svg) no-repeat;
  z-index: 999;

    a {
        display: block;
        height: 45px;
        text-decoration: none;
        background-color: transparent;

        span {
            position: absolute;
            top: -1000px;
            z-index: 999;
        }
    }
`

const StyledMainmenu = styled.div`
  position: absolute;
  right: 80px;
  top: 10px;
  font-size: 16px;
  letter-spacing: 2px;

  .nav {
    display: flex;
    flex-wrap: wrap;
  }

  li {
    margin: 0 10px;
    list-style: none;

    &:last-child {
      margin-right: -20px;
    }

    .navLink {
      padding: 10px 20px 31px 20px;
      color: #fff;
      display: inline-block;
      outline: none;
      text-decoration: none;
      position: relative;

      &::after {
        content: '';
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 6px;
        background: #fff;
        opacity: 0;
        transition: all 0.3s;
        transform: translateY(5px);
      }
      &.active::after,
      &:hover::after{
        opacity: 1;
        transform: translateY(0px);
      }

      &:hover + ul {
      opacity: 1;
      }
    }

    

    /* &.active {
      & > a::after {
        opacity: 1;
      }
    } */
  }

  .mobile-menu,
  button {
    display: none;
  }

  @media (max-width: 1200px) {
    font-size: 25px;
    right: 0px;

    button {
      display: block;
    }

    .nav {
      display: none;
    }

    .mobile-menu {
      display: block;
    }
  }
`;


const StyledLanguage = styled.div`
  position: absolute;
  right: 0;
  top: 22px;
  z-index: 99;

  @media (max-width: 1200px) {
    right: 30px;
  }
`

const StyledLangChoose = styled.div`
  background: url(https://www.wowprime.com/templates/cadiis/images/ui/language.svg) no-repeat !important;
  margin: 0 !important;
  padding: 0 !important;
  display: block;
  text-indent: -999px;
  width: 20px;
  height: 20px;
  cursor: pointer;
`

const StyledSerchBtn = styled.div`
  position: absolute;
  right: 25px;
  top: 20px;

  @media (max-width: 1200px) {
    right: 55px;
  }

`

const StyledImg = styled.img`
    width: 100%;
    border: none;
`

const StyleLangList = styled.div`
  width: 20px;
  height: 20px;
`

export default Header;