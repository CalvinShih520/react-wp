import styled from 'styled-components';
import { ResetStyle, Container, Row, A } from '../../components/globalStyle';
import { useTranslation } from 'react-i18next';


const HomeHR = styled.div`
    padding-bottom: 100px;
    position: relative;

    &::before {
    content: '';
    position: absolute;
    width: 100%;
    background: #DE052E;
    height: 40%;
    box-sizing: border-box;
    }
`;

const BigTitle = styled.div`
    font-size: 85px;
    color: #fff;
    font-weight: 500;
    height: 51%;
    position: absolute;
    top: 0;
    left: 0%;
    z-index: 9;
    padding-left: 3%;
    display: flex;
    align-items: flex-end;
    flex: 0 0 100%;
    max-width: 100%;
    width: 100%;
    min-height: 1px;
    @media (max-width: 675px) {
        font-size: 75px;
    }
    @media (max-width: 600px) {
        font-size: 60px;
    }
`;

const HRIntro = styled.div`
    transform: translate(15%, 60%);
    padding-left: 30px;
    flex: 0 0 41.666667%;
    max-width: 41.666667%;
    width: 100%;
    min-height: 1px;
    padding-right: 15px;

    @media (max-width: 1200px) {
        padding-left: 0px;
    }
    @media (max-width: 1000px) {
        max-width: 100%;
        flex: 0 0 80%;
    }
`;

const SubTitle = styled.p`
    font-size: 35px;
    color: #000;

    
`;

const Title = styled.p`
    font-weight: 700;
    margin-bottom: 10px;
    color: #de052e;
    
`;

const HRIntroUL = styled.ul`
    column-count: 2;
    width: 480px;
    margin-top: 20px;
    margin-bottom: 50px;

    @media (max-width: 1200px) {
        margin-bottom: 20px;
    }

    @media (max-width: 720px) {
        width: 360px;
    }
    @media (max-width: 450px) {
        width: 300px;
    }
`;

const IntroLi = styled.li`
    background: url(https://www.wowprime.com/templates/cadiis/images/ui/people-li.png) no-repeat left 6px;
    background-size: 25px;
    padding: 10px 0 0 35px;
    margin-bottom: 15px;

    @media (max-width: 452px) {
        padding: 5px 0 0 35px;
        margin-bottom: 0px;
    }
`;

const HRImg = styled.div`
    padding-top: 130px;
    flex: 0 0 58.333333%;
    max-width: 58.333333%;
    width: 100%;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;

    @media (max-width: 1200px) {
        padding-top: 0px;
    }
    @media (max-width: 1000px) {
        display: none;
    }
`;

const HRImgImg = styled.img`
    max-width: 100%;
`;

const RedBtn = styled.a`
  padding: 20px;
  background: #de052e;
  border-radius: 40px;
  width: 210px;
  display: block;
  text-align: center;
  color: #fff !important;
  border: 1px solid transparent;
`;

const HomeHRComponent = () => {
    const { t } = useTranslation();

    return (
        <div className='Resource-section'>
            <ResetStyle />
            <HomeHR>
                <Row>
                <BigTitle>Human Resource</BigTitle>
                <HRIntro>
                    <Title>{t("HumanTitleA")}</Title>
                    <SubTitle>{t("HumanTitleB")}</SubTitle>
                    <HRIntroUL>
                        <IntroLi>{t("HumanListA")}</IntroLi>
                        <IntroLi>{t("HumanListB")}</IntroLi>
                        <IntroLi>{t("HumanListC")}</IntroLi>
                        <IntroLi>{t("HumanListD")}</IntroLi>
                        <IntroLi>{t("HumanListE")}</IntroLi>
                        <IntroLi>{t("HumanListF")}</IntroLi>
                    </HRIntroUL>
                    <RedBtn href="#">{t("Btn")}</RedBtn>
                </HRIntro>
                <HRImg>
                    <HRImgImg src="https://www.wowprime.com/uploads/home/hr.jpg" alt="" />
                </HRImg>
                </Row>
            </HomeHR>
        </div>
    );
};

export default HomeHRComponent;
