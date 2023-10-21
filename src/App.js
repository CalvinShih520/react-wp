import React, { useState } from 'react'
import HomePage from './Pages/HomePage';
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


const Router = () => {
    const {t,i18n} = useTranslation();
    
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
                        <ul className="nav">
                            <li><Link to="/react-wp/about">{t("AboutWowPrime")}</Link></li>
                            <li><Link to="/react-wp/map">{t("MapWowPrime")}</Link></li>
                            <li><Link to="/react-wp/resbility">{t("responsibilityWowPrime")}</Link></li>
                            <li><Link to="/react-wp/interested">{t("RelevantWowPrime")}</Link></li>
                            <li><Link to="/react-wp/newscenter">{t("NewsWowPrime")}</Link></li>
                            <li><Link to="/react-wp/recruiting">{t("recruitWowPrime")}</Link></li>
                        </ul>
                        {/* <div  style={{display: 'flex',justifyContent:'space-between',alignItems:'center'}}>
                            <div>
                                <Link to='/' style={{textDecoration: 'none'}}><div style={{cursor: 'pointer' , fontSize:20}} >王品集團wowprime</div></Link>
                            </div>
                            <div style={{display: 'flex',justifyContent:'space-around'}}>
                                <Link to="/about" style={{textDecoration: 'none'}}><div style={{cursor: 'pointer' , fontSize:20,padding:25}} >關於王品</div></Link>
                                <Link to="/map" style={{textDecoration: 'none'}}><div style={{cursor: 'pointer' , fontSize:20,padding:25}} >美食地圖</div></Link>
                                <Link to="/resbility" style={{textDecoration: 'none'}}><div style={{cursor: 'pointer' , fontSize:20,padding:25}} >企業責任</div></Link>
                                <Link to="/interested" style={{textDecoration: 'none'}}><div style={{cursor: 'pointer' , fontSize:20,padding:25}} >利害關係人</div></Link>
                                <Link to="/newscenter" style={{textDecoration: 'none'}}><div style={{cursor: 'pointer' , fontSize:20,padding:25}} >新聞中心</div></Link>
                                <Link to="/recruiting" style={{textDecoration: 'none'}}><div style={{cursor: 'pointer' , fontSize:20,padding:25}} >人才招募</div></Link>
                            </div>
                        </div>  */}
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
`

const StyledLanguage = styled.div`
  position: absolute;
  right: 0;
  top: 20px;
  z-index: 99;
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

`

const StyledImg = styled.img`
    width: 100%;
    border: none;
`

const StyleLangList = styled.div`
  width: 20px;
  height: 20px;
`

export default Router;