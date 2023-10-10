import React from 'react';
import App from './container/App';
import About from './Web/About';
import Map from './Web/Map';
import Resbility from './Web/Resbility';
import Interested from './Web/Interested';
import Newscenter from './Web/Newscenter';
import Recruiting from './Web/Recruiting';
//import {Route,Link} from 'react-router-dom';
import {Routes, Route ,Link} from 'react-router-dom';
import styled from 'styled-components';
import './index.css';

const Router = () => {
    
    return (
        <div>
            <StyledHeader>
                <StyledContainer>
                    <StyledLogo>
                        <Link to='/react-wp' style={{textDecoration: 'none'}}><span>王品集團</span></Link>
                    </StyledLogo>
                    <StyledMainmenu>
                        <ul className="nav">
                            <li><Link to="/react-wp/about">關於王品</Link></li>
                            <li><Link to="/react-wp/map">美味地圖</Link></li>
                            <li><Link to="/react-wp/resbility">企業責任</Link></li>
                            <li><Link to="/react-wp/interested">利害關係人</Link></li>
                            <li><Link to="/react-wp/newscenter">新聞中心</Link></li>
                            <li><Link to="/react-wp/recruiting">人才招募</Link></li>
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
                        <StyledLangChoose></StyledLangChoose>
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
                <Route path='/react-wp' exact Component={App} />
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



export default Router;