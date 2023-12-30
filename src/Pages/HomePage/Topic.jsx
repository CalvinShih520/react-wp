import React from 'react';
import styled from 'styled-components';
import { Container } from '../../components/globalStyle';
import { useTranslation } from 'react-i18next'; 

const HomeMarquee = styled.div`
  padding: 40px 0;
`;

const HomeMarqueeContainer = styled.div`
  max-width: 1140px;
  margin: 0 auto;
`;

const KKContentCarouselWrap = styled.div`
  display: flex;
  align-items: center;
`;

const TopicContainer = styled.div`
  padding: 7px 13px;
  background: #de052e;
  color: #fff;
  font-size: 16px;
  margin-right: 10px;
  font-weight: 700;
`;

const TopicSlide = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
`;

const TopicDate = styled.span`
  border-right: 1px solid #333333;
  padding-right: 10px;
  margin-right: 10px;
  font-weight: 700;
  display: inline-block;
`;

const TopicTitle = styled.span`
  line-height: 140%;
`;

const TopicNav = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  margin-top: 0;
`;

const TopicPrev = styled.div`
  background: url(https://www.wowprime.com/templates/cadiis/images/ui/arrow-left.svg) no-repeat center center;
  width: 8px;
  height: 14px;
  font-size: 14px;
  margin: 5px;
  padding: 4px 7px;
`;

const TopicNext = styled.div`
  background: url(https://www.wowprime.com/templates/cadiis/images/ui/arrow-right.svg) no-repeat center center;
  width: 8px;
  height: 14px;
  font-size: 14px;
  margin: 5px;
  padding: 4px 7px;
`;

const Topic = () => {
  const { t } = useTranslation(); 

  return (
    <div className='Topic-Section'>
        {/* <ResetStyle /> */}
        <HomeMarquee>
        <HomeMarqueeContainer>    
        <Container>
            
                <KKContentCarouselWrap>
                <TopicContainer>TOPIC</TopicContainer>
                <TopicSlide>
                    <a href="#">
                    <TopicDate>2022.06.21</TopicDate>
                    <TopicTitle>{t("IncomeRepo")}</TopicTitle>
                    </a>
                </TopicSlide>
                <TopicNav>
                    <TopicPrev></TopicPrev>
                    <TopicNext></TopicNext>
                </TopicNav>
                </KKContentCarouselWrap>
            
        </Container>
        </HomeMarqueeContainer>
        </HomeMarquee>
    </div>
  );
};

export default Topic;
