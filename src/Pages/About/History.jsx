import React from 'react';
import styled from 'styled-components';
import { ResetStyle, Container, Row } from '../../components/globalStyle';

const Desc = styled.div`
    padding: 100px 0 80px 0;
    margin-bottom: 80px;
    background: #F2EDEA;
`;

const TableRwd = styled.table`
    width: calc(100% + 30px);
    margin-left: -15px;

    @media (max-width: 576px) {
        width: 100%;
        margin-left: 0;
    }
`;

const Td = styled.td`
    width: 50%;
    padding: 15px;
    vertical-align: top;

    @media (max-width:1024px){
        padding: 15px 0;
    }
    @media (max-width:768px){
        display: block;
        width: 100% !important;
    }
`;

const Title = styled.p`
    line-height: 180% !important;
    color: #DE052E;
    margin-bottom: 10px;
    font-weight: bold;
    position: relative;
    padding-left: 105px;
    &::before{
        content: "";
        width: 90px;
        height: 1px;
        background: #B6B6B6;
        position: absolute;
        left: 0;
        top: 13px;
    }
`;

const SubTitle = styled.p`
    color: #000;
    font-size: 40px;
    padding-bottom: 25px;
    line-height: 180% !important;

    @media (max-width: 1200px) {
    font-size: 35px;
    }
`;

const P = styled.p`
    line-height: 180% !important;
`;

const Span = styled.span`
    font-size: 18px;
`;

const HistoryTitle = styled.h1`
    text-align: center;
    font-size: 35px;
    position: relative;
    padding-bottom: 25px;
    margin-bottom: 30px;
    line-height: 140%;
    display: flex;
    justify-content: center;

    &::after{
        content: '';
        position: absolute;
        background: #DE052E;
        height: 4px;
        width: 90px;
        left: auto !important;
        bottom: 0;
    }

    @media (max-width: 992px){
        font-size: 30px;
    }
    @media (max-width: 768px){
        font-size: 25px;
    }

`;

const History = () => {

    return (
        <div className='History-section'>
            <Desc>
                <Container>
                    <TableRwd>
                        <tbody>
                            <tr>
                                <Td>
                                    <Title>Group Introduction</Title>
                                    <SubTitle>
                                        台灣餐飲集團龍頭
                                        <br />
                                        30年持續創新進化
                                    </SubTitle>
                                </Td>
                                <Td>
                                    <P>
                                        <Span>王品集團成立於1993年</Span>
                                    </P>
                                    <P>
                                        <Span>以組織力量發展經營多品牌、多品類</Span>
                                    </P>
                                    <P>&nbsp;</P>
                                    <P>
                                        <Span>旗下涵蓋中、西、火鍋、燒肉、日韓等類別共32大品牌</Span>
                                    </P>
                                    <P>
                                        <Span>超過400家門店</Span>
                                    </P>
                                    <P>&nbsp;</P>
                                    <P>
                                        <Span>陪伴超過2,300萬人次消費者，為台灣最具影響力的餐飲集團</Span>
                                    </P>
                                </Td>
                            </tr>
                        </tbody>
                    </TableRwd>
                    <p>&nbsp;</p>
                </Container>
            </Desc>
            <HistoryTitle>
            企業沿革
            </HistoryTitle>
        </div>
    );
}

export default History;