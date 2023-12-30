import styled from 'styled-components';
import {ResetStyle, Row} from '../../components/globalStyle';
import { useTranslation } from 'react-i18next';

const IntrodutionSlide = styled.div`
  background: #f2edea;
  padding: 80px 0;
`;

const KKContentRow = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 1160px) {
    flex-direction: column; 
    align-items: center;
  }
`;

const FullText = styled.div`
  padding-left: 5%;
  padding-right: 15px;
  flex: 0 0 41.666667%;
  max-width: 41.666667%;

  @media (max-width: 1160px) {
    max-width: 100%;
    padding-bottom: 20px;
  }
`;

const Item = styled.div`
  margin: 0 10px;
`;

const FullImg = styled.div`
  flex: 0 0 58.333333%;
  max-width: 58.333333%;
  width: 100%;
  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px;

  @media (max-width: 1160px) {
    max-width: 100%;
  }
`;

const Img = styled.img`
    width: 100%;
`

const TitleImg = styled.div`
  padding-bottom: 15px;
`;

const TitleImage = styled.img`
  width: auto;
  max-width: 100%;
`;

const Title = styled.p`
  color: #000;
  padding-bottom: 25px;
  font-size: 35px;
`;

const Description = styled.p`
  line-height: 140%;
`;

const Introdution = () => {
  const { t } = useTranslation();

  return (
    <div className='Introdution-section'>
        <ResetStyle />
        <IntrodutionSlide>
        <Row>
        <KKContentRow>
            <FullText>
            <Item>
                <TitleImg>
                <TitleImage src="https://www.wowprime.com/templates/cadiis/images/ui/title-img.svg" alt="" />
                </TitleImg>
                <Title>{t("IntrodutionA")}<br />{t("IntrodutionB")}</Title>
                <Description>{t("IntrodutionC")}</Description>
                </Item>
            </FullText>
            <FullImg >
                <Img  src="https://www.wowprime.com/images/kkcontent_thumbs/thumb_105_29_1648631326_s-slider01.jpg" alt=""/>
            </FullImg>
        </KKContentRow>
        </Row>
        </IntrodutionSlide>
    </div>
  );
};

export default Introdution;
