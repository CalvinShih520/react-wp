import React from "react";
import styled from "styled-components";
import { Tabs } from 'antd';
import { useTranslation } from 'react-i18next'; 



const onChange = (key) => {
  console.log(key);
};

const StyledWrap = styled.div`
    width: 90%;
    height: auto;
    margin: 0 auto;
    
    .ant-tabs-nav{
      &::before{
        border-bottom: 0px;
      }
    }

    .ant-tabs-nav-wrap,.ant-tabs-nav-list{
      width: 100%;
    }
    .ant-tabs-tab{
      width: 33%;
      padding: 0px;

      
      &+.ant-tabs-tab{
        margin: 0px;
      }

      &:hover,& .ant-tabs-tab-active{
        background: #DE052E;

        & img{
          filter: brightness(100);
        }

        & a{
          color: #fff;
        }
      }
      /* & .ant-tabs-tab-active{
        background: #DE052E;
        color: #fff;
      } */
    }
    .ant-tabs-tab-btn{
      margin: 0 auto;
    }
    .ant-tabs-ink-bar{
      background:initial;
    }

    

`;

const StyledA = styled.a`
    padding: 5px;
    letter-spacing: 3px;
    height: 85px;
    display: flex;
    justify-content: center;
    align-items: center;
    zoom: 1;
    transition: 0.3s linear;
    font-size: 18px;

`;

const StyledSpan = styled.span`
  &::after{
    box-sizing: border-box;
  }
`;

const StyledIMG = styled.img`
  margin: 0 15px;
  
  &:hover{
    filter: brightness(100);
  }

  @media (max-width:768px){
    display: none;
  }
`;


const StyledChildWrap = styled.div`
    width: 70%;
    height: auto;
    margin: 0 auto;
`;

const StyledChildUl = styled.ul`
  display: flex;
  align-items: center;
  width: 100%;
`;

const StyledChildLi = styled.li`
  display: inline-block;
  width: 100%;

`;

const StyledChildA = styled.a`
  height: auto;
  line-height: 140%;
  padding: 20px 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;


const StyledSubmenu = styled.div`
    position: relative;
    margin-top: -3.5px;
    overflow: hidden;
    z-index: 998;
    background: #fff;
    box-shadow: 0px 0px 27px 1px rgba(0, 0, 0, 0.1);

    &::after{
        content: "";
        width: 10000%;
        height: 1px;
        left: 0;
        top: 85px;
        background: #ccc;
        position: absolute;
    }
`;

const Submenu = () => {

  const { t } = useTranslation(); 

  const items = [
    {
      key: '1',
      label: 
        <div>
          <StyledA>
            <StyledIMG src="https://www.wowprime.com/uploads/carouesll-menu/about-wowprime.svg" alt="" />
            <StyledSpan>{t("InterestedSubmenuTitle1")}</StyledSpan>
          </StyledA>
        </div>,
      children: 
        <StyledChildWrap>
          <StyledChildUl>
            <StyledChildLi>
              <StyledChildA>{t("InterestedSubmenuTitle1List1")}</StyledChildA>
            </StyledChildLi>
            <StyledChildLi>
              <StyledChildA>{t("InterestedSubmenuTitle1List2")}</StyledChildA>
            </StyledChildLi>
            <StyledChildLi>
              <StyledChildA>{t("InterestedSubmenuTitle1List3")}</StyledChildA>
            </StyledChildLi>
            <StyledChildLi>
              <StyledChildA>{t("InterestedSubmenuTitle1List4")}</StyledChildA>
            </StyledChildLi>
            <StyledChildLi>
              <StyledChildA>{t("InterestedSubmenuTitle1List5")}</StyledChildA>
            </StyledChildLi>
            <StyledChildLi>
              <StyledChildA>{t("InterestedSubmenuTitle1List6")}</StyledChildA>
            </StyledChildLi>
          </StyledChildUl>
        </StyledChildWrap>,
    },
    {
      key: '2',
      label: <div>
      <StyledA>
        <StyledIMG src="https://www.wowprime.com/uploads/carouesll-menu/finance.svg" alt="" />
        <StyledSpan>{t("InterestedSubmenuTitle2")}</StyledSpan>
      </StyledA>
    </div>,
      children: <StyledChildWrap>
      <StyledChildUl>
        <StyledChildLi>
          <StyledChildA>{t("InterestedSubmenuTitle2List1")}</StyledChildA>
        </StyledChildLi>
        <StyledChildLi>
          <StyledChildA>{t("InterestedSubmenuTitle2List2")}</StyledChildA>
        </StyledChildLi>
        <StyledChildLi>
          <StyledChildA>{t("InterestedSubmenuTitle2List3")}</StyledChildA>
        </StyledChildLi>
      </StyledChildUl>
    </StyledChildWrap>,
    },
    {
      key: '3',
      label: <div>
      <StyledA>
        <StyledIMG src="https://www.wowprime.com/uploads/carouesll-menu/shareholder.svg" alt="" />
        <StyledSpan>{t("InterestedSubmenuTitle3")}</StyledSpan>
      </StyledA>
    </div>,
      children: <StyledChildWrap>
      <StyledChildUl>
        <StyledChildLi>
          <StyledChildA>{t("InterestedSubmenuTitle3List1")}</StyledChildA>
        </StyledChildLi>
        <StyledChildLi>
          <StyledChildA>{t("InterestedSubmenuTitle3List2")}</StyledChildA>
        </StyledChildLi>
        <StyledChildLi>
          <StyledChildA>{t("InterestedSubmenuTitle3List3")}</StyledChildA>
        </StyledChildLi>
        <StyledChildLi>
          <StyledChildA>{t("InterestedSubmenuTitle3List4")}</StyledChildA>
        </StyledChildLi>
        <StyledChildLi>
          <StyledChildA>{t("InterestedSubmenuTitle3List5")}</StyledChildA>
        </StyledChildLi>
        <StyledChildLi>
          <StyledChildA>{t("InterestedSubmenuTitle3List6")}</StyledChildA>
        </StyledChildLi>
      </StyledChildUl>
    </StyledChildWrap>,
    },
  ];
  

    return(
        <div className='Submenu-section'>
            <StyledSubmenu>
              <StyledWrap>
                <Tabs defaultActiveKey="1" items={items} onChange={onChange} centered={true} />
              </StyledWrap>
            </StyledSubmenu>
        </div>
    );
}

export default Submenu