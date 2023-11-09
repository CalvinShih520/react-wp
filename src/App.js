import React, { useState } from 'react'
import HomePage from './Pages/HomePage/HomePage';
import About from './Pages/About';
import Map from './Pages/Map';
import Resbility from './Pages/Resbility';
import Interested from './Pages/Interested';
import Newscenter from './Pages/Newscenter';
import Recruiting from './Pages/Recruiting';
//import {Route,Link} from 'react-router-dom';
import {Routes, Route ,Link} from 'react-router-dom';
import styled from 'styled-components';
import './index.css';
import "./i18n";
import {useTranslation,Trans} from "react-i18next";
import { UnorderedListOutlined } from '@ant-design/icons';
import DropdownBottom from "./components/antd/Dropdown";


const Header = () => {
    const {t,i18n} = useTranslation();
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
                        <Link to='/react-wp' style={{textDecoration: 'none'}}><span>王品集團</span></Link>
                    </StyledLogo>
                    <StyledMainmenu>
                      <button onClick={toggleMenu}  style={{ background: '#DE052E', color: 'white' }}>
                        <UnorderedListOutlined />
                      </button>
                      {isMenuOpen ? (
                        <div className="mobile-menu">
                          {/* 在这里添加图标和链接 */}
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
                            <li><Link to="/react-wp/about">{t("AboutWowPrime")}</Link></li>
                            <li><Link to="/react-wp/map">{t("MapWowPrime")}</Link></li>
                            <li><Link to="/react-wp/resbility">{t("responsibilityWowPrime")}</Link></li>
                            <li><Link to="/react-wp/interested">{t("RelevantWowPrime")}</Link></li>
                            <li><Link to="/react-wp/newscenter">{t("NewsWowPrime")}</Link></li>
                            <li><Link to="/react-wp/recruiting">{t("recruitWowPrime")}</Link></li>
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

    li {
        margin: 0 10px;
        list-style: none;

        &:last-child{
            margin-right: -20px;

            
        }
        a {
                padding: 10px 20px 31px 20px;
                color: #fff;
                display: inline-block;
                outline: none;
                text-decoration: none;
            }
    }
  }
  .mobile-menu,button {
    display: none; /* 隐藏图标展开的内容，它将在小于1200px时显示 */
  }
  

  @media (max-width: 1200px) {
    font-size: 25px;
    right: 0px;
    top: 15px;
    button {
      display: block; /* 在小于1200px时显示按钮 */
    }

    .nav {
      display: none; /* 在小于1200px时隐藏正常菜单 */
    }

    .mobile-menu {
      display: block; /* 在小于1200px时显示图标展开的内容 */
    }
  }
`

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