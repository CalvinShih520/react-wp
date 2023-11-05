import React from 'react';
import styled from 'styled-components';
import { ResetStyle, Container, Row } from '../../components/globalStyle';
import { useTranslation } from 'react-i18next';

const HomeAboutSection = styled.div`
  background: #f1f1f1;
  padding: 100px 0;

  @media (max-width: 760px) {
    padding: 50px 0;
  }
`;

const HomeAboutContainer = styled.div`
  max-width: 1140px;
  margin: 0 auto;
`;

const HomeAboutLeft = styled.div`
  flex: 0 0 33.333333%;
  max-width: 33.333333%;
  width: 100%;
  min-height: 1px;
  padding: 0 15px;

  @media (max-width: 760px) {
      max-width: 100%;
      padding-bottom: 20px;
  }
`;

const HomeAboutRight = styled.div`
  flex: 0 0 66.666666%;
  max-width: 66.666666%;
  width: 100%;
  min-height: 1px;
  padding: 0 15px;

  @media (max-width: 760px) {
      max-width: 100%;
  }
`;

const Title02 = styled.p`
  color: #de052e;
  margin-bottom: 10px;
  font-weight: bold;
`;

const Title01 = styled.p`
  font-size: 35px;
  color: #000;
  padding-bottom: 25px;
`;

const Paragraph = styled.p`
  line-height: 140%;
  color: #707070;
`;

const RedButton = styled.a`
  padding: 20px;
  background: #de052e;
  border-radius: 40px;
  width: 210px;
  display: block;
  text-align: center;
  color: #fff !important;
  border: 1px solid transparent;
  zoom: 1;
  transition: 0.3s linear;
  cursor: pointer;
`;

const TableRWD = styled.table`
  width: calc(100% + 30px);
  margin-left: -15px;
  border-collapse: collapse;
  border-spacing: 0;
`;

const TableCell = styled.td`
  padding: 15px;
  vertical-align: top;
  text-align: center;

  @media (max-width: 500px) {
    padding: 0;
  }
`;

const CounterItem = styled.div`
  display: flex;
  font-size: 40px;
  font-weight: 700;
  justify-content: center;
  margin-bottom: 30px;

  @media (max-width: 500px) {
    margin-bottom: 10px;
    font-size: 24px;
  }
`;

const CounterValue = styled.div`
  font-size: 40px;
  font-weight: 700;

  @media (max-width: 500px) {
    font-size: 24px;
  }
`;

const CounterLabel = styled.span`
  
`;


const MyHomeAbout = () => {
    const { t } = useTranslation();

    return (
        <div className='About-section'>
            <ResetStyle />
            <HomeAboutSection>
                <HomeAboutContainer>
                    <Container>
                        <Row alignCenter vertical>

                                <HomeAboutLeft>
                                    <Title02>Investor</Title02>
                                    <Title01>
                                        {t("HomeAboutA")}
                                        <br />
                                        {t("HomeAboutB")}
                                    </Title01>
                                    <Paragraph>{t("HomeAboutC")}</Paragraph>
                                    <Paragraph>{t("HomeAboutD")}</Paragraph>
                                    <Paragraph>&nbsp;</Paragraph>
                                    <RedButton href="#" className="red-btn">
                                        {t("Btn")}
                                    </RedButton>
                                </HomeAboutLeft>
                                <HomeAboutRight>
                                    <TableRWD>
                                        <tbody>
                                            <tr>
                                                <TableCell>
                                                    <CounterItem>
                                                        <CounterValue>30</CounterValue>
                                                        <CounterLabel>{t("HomeAboutListA")}</CounterLabel>
                                                    </CounterItem>
                                                    <Paragraph>{t("HomeAboutListA2")}</Paragraph>
                                                </TableCell>
                                                <TableCell>
                                                    <CounterItem>
                                                        <CounterValue>323</CounterValue>
                                                        <CounterLabel>{t("HomeAboutListB")}</CounterLabel>
                                                    </CounterItem>
                                                    <Paragraph>{t("HomeAboutListB2")}</Paragraph>
                                                </TableCell>
                                                <TableCell>
                                                    <CounterItem>
                                                        <CounterValue>99</CounterValue>
                                                        <CounterLabel>{t("HomeAboutListC")}</CounterLabel>
                                                    </CounterItem>
                                                    <Paragraph>{t("HomeAboutListC2")}</Paragraph>
                                                </TableCell>
                                                <TableCell>
                                                    <CounterItem>
                                                        <CounterValue>36</CounterValue>
                                                        <CounterLabel>{t("HomeAboutListD")}</CounterLabel>
                                                    </CounterItem>
                                                    <Paragraph>{t("HomeAboutListD2")}</Paragraph>
                                                </TableCell>
                                            </tr>
                                        </tbody>
                                    </TableRWD>
                                </HomeAboutRight>
                      
                        </Row>
                    </Container>
                </HomeAboutContainer>
            </HomeAboutSection>
        </div>
    );
};

export default MyHomeAbout;
