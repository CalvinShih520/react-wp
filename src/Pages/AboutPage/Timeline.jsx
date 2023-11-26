import React from 'react';
import styled from 'styled-components';
import { ResetStyle, Container, Row } from '../../components/globalStyle';
import { ClockCircleOutlined } from '@ant-design/icons';
import { Timeline } from 'antd';

const Wrap = styled.div`
    overflow: unset;
    margin-top: 50px;
    list-style: none;
    position: relative;
    max-width: 1200px;
    padding: 20px;
    margin: 0 auto;

    @media (max-width : 768px){
        margin-top: 15px;
        overflow: hidden;

    }
`;

const TimelineRow = styled.div`
    padding-left: 13%;
    padding-right: 0;
    position: relative;
    z-index: 10;
    padding-bottom: 80px;

    
  .ant-timeline-item-tail{
    border-inline-start: 4px solid rgba(0, 0, 0, 0.2);
    height: 100%;
    inset-block-start: 0px;
    display: block !important;
    }
  .ant-timeline-item-head {
    padding-block: 0px;
    top: 85px;
  }

  .ant-timeline-item{
    padding-top: 20px;
  }
`;

const StyledDot = styled.div`
  width: 50px;
  height: 50px;
  background-color: #DE052E;
  border-radius: 50%;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;

  
`;

const StyledChild = styled.div`
  margin-left: 40px;

  @media (max-width: 576px){
    margin-left: 15px;
  }

`;

const Time = styled.div`
    margin : 0 0 6px 20px;
`;

const H3 = styled.h3`
    font-size: 50px;
`;

const Year = styled.span`
    font-size: 16px;
    color: #888;
    display: inline-block;
    padding-left: 10px;
`;

const Content = styled.div`
    padding: 25px 40px;
    border-radius: 10px;
    margin: 0 15px;
    border: 1px solid #B7B7B7 !important;

    @media (max-width: 576px){
        padding: 15px 10px;
        margin: 0;
    }

    &::before{
        content: "";
        position: absolute;
        top: 44px;
        left: -15px;
        width: 17px;
        height: 0;
        border-style: solid;
        z-index: 1;
        border-width: 7.5px 15px 7.5px 0;
        border-color: transparent #fff transparent transparent;
    }
    
    &::after{
        border-width: 7.5px 15px 7.5px 0;
        border-color: transparent #b7b7b7 transparent transparent;
        top: 44px;
        left: -15px;
        width: 0;
        height: 0;
        border-style: solid;
        z-index: -1;
        content: "";
        position: absolute;
    }
`;

const PanelBody = styled.div`
    padding: 5px 10px;
`;

const P = styled.p`
    margin-bottom: 15px;
`;

const Li =styled.li`
    padding-left: 20px;
    margin-left: 0px !important;
    margin-bottom: 15px;
    line-height: 180%;

    &::before{
        content: "";
        position: absolute;
        left: 0;
        top: 10px;
        height: 7px;
        width: 7px;
        background: #DE052E;
        border-radius: 50%;
        display: inline-block;
    }
`;

const Img = styled.img`
    width:inherit;
    margin-bottom: 15px;

    @media (max-width :850px){
        width: 100%;
    }
`;

const TimeLine = () => {

    return (
        <div className='Timeline-section'>
            <Wrap>
                <TimelineRow>
                    <Timeline
                        items={[
                            {
                                dot: (
                                    <StyledDot>
                                        <ClockCircleOutlined style={{ fontSize: '32px' }} />
                                    </StyledDot>
                                ),
                                color: 'red',
                                children: (
                                    <StyledChild>
                                      <Time>
                                        <H3>
                                            2022
                                            <Year>年</Year>
                                        </H3>
                                      </Time>
                                      <Content>
                                        <PanelBody>
                                            <P></P>
                                            <ul>
                                                <Li>成立「嚮辣」、「來滋烤鴨」、「最肉」</Li>
                                                <Li>大陸成立「力樂鍋」、「英記十八味沙爹皇」、「Wang Steak PL」</Li>
                                            </ul>
                                            <P></P>
                                        </PanelBody>
                                      </Content>
                                    </StyledChild>
                                  ),
                            },
                            {
                                dot: (
                                    <StyledDot>
                                        <ClockCircleOutlined style={{ fontSize: '32px' }} />
                                    </StyledDot>
                                ),
                                color: 'red',
                                children: (
                                    <StyledChild>
                                      <Time>
                                        <H3>
                                            2021
                                            <Year>年</Year>
                                        </H3>
                                      </Time>
                                      <Content>
                                        <PanelBody>
                                            <P></P>
                                            <ul>
                                                <Li>成立「肉次方」、「尬鍋」</Li>
                                                <Li>大陸成立「和牛涮」、「西川霸牛」、「金鳳來儀」、「amigo」</Li>
                                                <Li>「THE WANG」蟬聯米其林餐盤推薦</Li>
                                                <Li>「王品瘋美食購物網」改版上線，將餐廳美味、生鮮食材延伸到消費者家中</Li>
                                            </ul>
                                            <P></P>
                                        </PanelBody>
                                      </Content>
                                    </StyledChild>
                                  ),
                            },
                            {
                                dot: (
                                    <StyledDot>
                                        <ClockCircleOutlined style={{ fontSize: '32px' }} />
                                    </StyledDot>
                                ),
                                color: 'red',
                                children: (
                                    <StyledChild>
                                      <Time>
                                        <H3>
                                            2020
                                            <Year>年</Year>
                                        </H3>
                                      </Time>
                                      <Content>
                                        <PanelBody>
                                            <P></P>
                                            <ul>
                                                <Li>成立「和牛涮」</Li>
                                                <Li>「THE WANG」榮獲「台北台中米其林指南」餐盤推薦</Li>
                                                <Li>打造全新「王品瘋美食APP」，僅花269天突破百萬會員</Li>
                                                <Li>成立台灣第一個「餐飲天使基金」，針對有餐飲夢的台灣創業家，打造孵化平台</Li>
                                            </ul>
                                            <P>
                                                <Img src='https://www.wowprime.com/uploads/history/2020.jpg' />
                                            </P>
                                            <P>&nbsp;</P>
                                            <P></P>
                                        </PanelBody>
                                      </Content>
                                    </StyledChild>
                                  ),
                            },
                            {
                                dot: (
                                    <StyledDot>
                                        <ClockCircleOutlined style={{ fontSize: '32px' }} />
                                    </StyledDot>
                                ),
                                color: 'red',
                                children: (
                                    <StyledChild>
                                      <Time>
                                        <H3>
                                            2019
                                            <Year>年</Year>
                                        </H3>
                                      </Time>
                                      <Content>
                                        <PanelBody>
                                            <P></P>
                                            <ul>
                                                <Li>成立「丰禾」、「THE WANG」</Li>
                                                <Li>大陸成立「鵲玥」</Li>
                                                <Li>創立子公司「萬鮮」，開發冷凍、常溫商品</Li>
                                                <Li>成為台灣唯一同時取得「ISO17025實驗室管理系統認證」、「ISO22000食品安全管理系統驗證」，雙項認/驗證的餐飲集團</Li>
                                            </ul>
                                            <P>
                                                <Img src='https://www.wowprime.com/uploads/history/2019.jpg' />
                                            </P>
                                            <P>&nbsp;</P>
                                            <P></P>
                                        </PanelBody>
                                      </Content>
                                    </StyledChild>
                                  ),
                            },
                            {
                                dot: (
                                    <StyledDot>
                                        <ClockCircleOutlined style={{ fontSize: '32px' }} />
                                    </StyledDot>
                                ),
                                color: 'red',
                                children: (
                                    <StyledChild>
                                      <Time>
                                        <H3>
                                            2018
                                            <Year>年</Year>
                                        </H3>
                                      </Time>
                                      <Content>
                                        <PanelBody>
                                            <P></P>
                                            <ul>
                                                <Li>成立「青花驕」、「12MINI」、「享鴨」</Li>
                                                <Li>大陸成立「舞漁」、「北島鮨鮮」</Li>
                                            </ul>
                                            <P></P>
                                        </PanelBody>
                                      </Content>
                                    </StyledChild>
                                  ),
                            },
                        ]}
                    />

                </TimelineRow>
            </Wrap>
        </div>
    );
}

export default TimeLine;