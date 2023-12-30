import styled from 'styled-components';
import { ResetStyle, Container, Row, A } from '../globalStyle';
import { useTranslation } from 'react-i18next';

const Footer = styled.footer`
  background: #888;
  padding-top: 80px;
`;

const FooterContainer = styled.div`
  max-width: 1140px;
  margin: 0 auto;
`;

const Flex25 = styled.div`
  flex: 0 0 25%;
  max-width: 25%;
  position: relative;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;

  @media (max-width: 760px) {
    padding-right: 0;
    padding-left: 0;
  }
  @media (max-width: 540px) {
    padding-right: 0;
    padding-left: 0;
    max-width: 50%;
  }
`;

const Flex75 = styled.div`
  flex: 0 0 75%;
  max-width: 75%;
  position: relative;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;

  @media (max-width: 760px) {
    max-width: 100%;
    padding-right: 5px;
    padding-left: 5px;
  }
`;

const FooterCol = styled.div`
  flex: 0 0 33.333333%;
  max-width: 33.333333%;
  position: relative;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;

  
`;

const ModuleHeader = styled.div`
  font-size: 22px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.6);
  padding-bottom: 10px;
  margin-bottom: 10px;
  line-height: 140%;
  color: #fff;
`;

const FooterUl = styled.ul`
  display: block;
  margin-bottom: 30px;
`;

const FooterLi = styled.li`
  margin-bottom: 10px;
`;

const FooterLink = styled.a`
  color: #fff;
  line-height: 140%;
`;

const Cookie = styled.a`
  color: #fff;
  line-height: 140%;
  border-right: 1px solid #d8d8d8;
    margin-right: 15px;
    padding: 5px 15px 5px 0;
    @media (max-width: 540px) {
    border: 0;
  }
`;

const Copyright = styled.div`
  text-align: center;
  padding: 15px 0;
  line-height: 150%;
  border-top: 1px solid rgba(255, 255, 255, 0.6);
  color: #fff;
`;

const CopyrightWrap = styled.div`
  display: flex;
  justify-content: center;

  @media (max-width: 540px) {
    flex-direction: column;
  }
`;

const CopyrightLink = styled.a`
  
  color: #fff;
`;

const CopyrightImage = styled.img`
  margin-right: 15px;
  width: auto;
`;
const CopyrightImage2 = styled.img`
  width: auto;
`;

const FooterIMG = styled.img`
    vertical-align: middle;
    border-style: none;
    width: auto;
`;

const StyledFooter = () => {
    const { t } = useTranslation();
  return (
    <div className='Footer-section'>
        <ResetStyle />
    <Footer>
        <FooterContainer>
      <Container>
        <Row vertical alignCenter760>
          <Flex25>
            <FooterIMG src="https://www.wowprime.com/templates/cadiis/images/ui/logo-w.svg" alt="" />
          </Flex25>
          <Flex75>
          <Row>
              <FooterCol>
                <ModuleHeader>{t("FooterTitleA")}</ModuleHeader>
                <FooterUl>
                  <FooterLi><FooterLink href="#">{t("FooterListA1")}</FooterLink></FooterLi>
                  <FooterLi><FooterLink href="#">{t("FooterListA2")}</FooterLink></FooterLi>
                  <FooterLi><FooterLink href="#">{t("FooterListA3")}</FooterLink></FooterLi>
                </FooterUl>
              </FooterCol>
              <FooterCol>
                <ModuleHeader>{t("FooterTitleB")}</ModuleHeader>
                <FooterUl>
                  <FooterLi><FooterLink href="#">{t("FooterListB1")}</FooterLink></FooterLi>
                  <FooterLi><FooterLink href="#">{t("FooterListB2")}</FooterLink></FooterLi>
                </FooterUl>
              </FooterCol>
              <FooterCol>
                <ModuleHeader>{t("FooterTitleC")}</ModuleHeader>
                <FooterUl>
                  <FooterLi><FooterLink href="#">{t("FooterListC1")}</FooterLink></FooterLi>
                  <FooterLi><FooterLink href="#">{t("FooterListC2")}</FooterLink></FooterLi>
                  <FooterLi><FooterLink href="#">{t("FooterListC3")}</FooterLink></FooterLi>
                  <FooterLi><FooterLink href="#">{t("FooterListC4")}</FooterLink></FooterLi>
                  <FooterLi><FooterLink href="#">{t("FooterListC5")}</FooterLink></FooterLi>
                  <FooterLi><FooterLink href="#">{t("FooterListC6")}</FooterLink></FooterLi>
                  <FooterLi><FooterLink href="#">{t("FooterListC7")}</FooterLink></FooterLi>
                  <FooterLi><FooterLink href="#">{t("FooterListC8")}</FooterLink></FooterLi>
                </FooterUl>
              </FooterCol>
              <FooterCol>
                <ModuleHeader>{t("FooterTitleD")}</ModuleHeader>
                <FooterUl>
                  <FooterLi><FooterLink href="#">{t("FooterListD1")}</FooterLink></FooterLi>
                  <FooterLi><FooterLink href="#">{t("FooterListD2")}</FooterLink></FooterLi>
                  <FooterLi><FooterLink href="#">{t("FooterListD3")}</FooterLink></FooterLi>
                </FooterUl>
              </FooterCol>
              <FooterCol>
                <ModuleHeader>{t("FooterTitleE")}</ModuleHeader>
                <FooterUl>
                  <FooterLi><FooterLink href="#">{t("FooterListE1")}</FooterLink></FooterLi>
                  <FooterLi><FooterLink href="#">{t("FooterListE2")}</FooterLink></FooterLi>
                  <FooterLi><FooterLink href="#">{t("FooterListE3")}</FooterLink></FooterLi>
                </FooterUl>
              </FooterCol>
              <FooterCol>
                <ModuleHeader>{t("FooterTitleF")}</ModuleHeader>
                <FooterUl>
                  <FooterLi><FooterLink href="#">{t("FooterListF1")}</FooterLink></FooterLi>
                  <FooterLi><FooterLink href="#">{t("FooterListF2")}</FooterLink></FooterLi>
                </FooterUl>
              </FooterCol>
              </Row>
          </Flex75>
          </Row>
      </Container>
      </FooterContainer>
      <Copyright>
      <FooterContainer>
        <Container>
          <CopyrightWrap>
          <p><Cookie  href="#">{t("Privacy")}</Cookie></p>
          
          <p>版權所有© Wowprime.Corp. All rights reserved.</p>
          </CopyrightWrap>
          <p>&nbsp;</p>
          <p>&nbsp;
            <CopyrightLink href="#">
              <CopyrightImage src="https://www.wowprime.com/uploads/home/fb.svg" alt="" />
            </CopyrightLink>
            <CopyrightLink href="#">
              <CopyrightImage src="https://www.wowprime.com/uploads/home/yt.svg" alt="" />
            </CopyrightLink>
            <CopyrightLink href="#">
              <CopyrightImage2 src="https://www.wowprime.com/uploads/home/wowfoods.svg" alt="" />
            </CopyrightLink>
          </p>
        </Container>
        </FooterContainer>
      </Copyright>
    </Footer>
    </div>
  );
};

export default StyledFooter;
