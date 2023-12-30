import React from "react";
import styled from "styled-components";
import {  Container, Row } from '../../components/globalStyle';
import { useTranslation } from 'react-i18next'; 

const StyledBG = styled.div`
    background: url(https://www.wowprime.com/templates/cadiis/images/ui/gray_bg.svg) no-repeat right bottom #F7F7F7;
    background-attachment: fixed;
    padding-top: 50px;
    padding-bottom: 60px;
`;

const StyledTitle = styled.h1`
    font-size: 35px;
    position: relative;
    padding-bottom: 25px;
    margin-bottom: 30px;
    display: block;
    line-height: 140%;

    &::after{
        content: "";
        position: absolute;
        background: #DE052E;
        height: 4px;
        width: 90px;
        left: 0;
        bottom: 0;
    }
`;

const StyledSubTitleWrap = styled.div`
    -webkit-box-flex: 0;
    -ms-flex: 0 0 75%;
    flex: 0 0 75%;
    max-width: 75%;
    padding-right: 15px;
    padding-left: 15px;
    

    @media (max-width: 768px){
        -webkit-box-flex: 0;
        -ms-flex: 0 0 100%;
        flex: 0 0 100%;
        max-width: 100%;
        margin-bottom: 10px;
    }
`;

const StyledSubTitleContent = styled.div`
    padding: 10px 30px 10px 20px;
    border: 1px solid #DFDFDF;
    display: flex;
    align-items: center;

    position: relative;
`;

const StyledSubTitleIcon = styled.div`
    margin-right: 15px;
`;

const StyledSubTitleImg = styled.img`
    max-width: 16px;
`;

const StyledTxtWrap = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const StyledSubTitleSpan = styled.div`
    display: inline-block;
`;

const StyledNav = styled.div`
    display: flex;
    
    position: absolute;
    top: 10px;
    right: 5px;
   
`;

const StyledPrev = styled.div`
    background: url(https://www.wowprime.com/templates/cadiis/images/ui/arrow-left.svg) no-repeat center center;
    text-indent: -99999px;
    width: 8px;
    height: 14px;
    font-size: 14px;
    margin: 5px;
    padding: 4px 7px;
`;

const StyledNext = styled.div`
    background: url(https://www.wowprime.com/templates/cadiis/images/ui/arrow-right.svg) no-repeat center center;
    text-indent: -99999px;
    width: 8px;
    height: 14px;
    font-size: 14px;
    margin: 5px;
    padding: 4px 7px;
`;

const StyledUpdateWrap = styled.div`
    -webkit-box-flex: 0;
    -ms-flex: 0 0 25%;
    flex: 0 0 25%;
    max-width: 25%;
    color: #777;
    align-items: center;
    justify-content: center;
    display: flex;
    padding-right: 15px;
    padding-left: 15px;

    @media (max-width: 768px){
        -webkit-box-flex: 0;
        -ms-flex: 0 0 100%;
        flex: 0 0 100%;
        max-width: 100%;
    }
`;

const StyledTableWrap = styled.div`
    -webkit-box-flex: 0;
    -ms-flex: 0 0 100%;
    flex: 0 0 100%;
    max-width: 100%;
    padding-right: 15px;
    padding-left: 15px;
`;

const StyledTable = styled.table`
    color: #fff;
    margin-top: 20px;
    margin-bottom: 50px;
    width: calc(100% + 30px);
    margin-left: -15px;
    border-collapse: collapse;
    border-spacing: 0;

    @media (max-width: 768px) {
        width: calc(100% + 20px);
        margin-left: -10px;
    }
`;

const StyledTr = styled.tr`
    display: flex;

    @media (max-width: 768px) {
        display: inherit;
    }
`;

const StyledTd = styled.td`
    margin: 15px;
    text-align: left;
    padding: 30px;
    background: #DE052E;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    border-radius: 5px;
    width: 25%;
    vertical-align: top;

    &:last-child{
        background: #F1F1F1;
        color: #000;
    }

    @media (max-width: 1024px) {
        margin: 0px;
        width: 50% !important;
        padding: 15px;
        display: inline-block;
        border: 10px solid #F7F7F7;
        text-align: center;
    }

    

`;

const StyledPtitle = styled.p`
    font-size: 18px;
    font-weight: bold;
    padding-left: 35px;
    background: url(https://www.wowprime.com/templates/cadiis/images/ui/store.svg) no-repeat center left;
    margin-bottom: 20px;
    line-height: 160%;

    @media (max-width: 768px) {
        font-size: 14px;
        margin-bottom: 10px;
    }
`;

const StyledLastPtitle = styled.p`
    font-size: 18px;
    font-weight: bold;
    padding-left: 35px;
    background: url(https://www.wowprime.com/templates/cadiis/images/ui/stock.svg) no-repeat center left;
    margin-bottom: 20px;
    line-height: 160%;

    @media (max-width: 768px) {
        font-size: 14px;
        margin-bottom: 10px;
    }
`;

const StyledPsubtitle = styled.p`
    font-size: 80px;
    font-weight: 100;
    line-height: 160%;

    @media (max-width: 768px) {
        font-size: 48px;
    }
`;

const StyledMessageWrap = styled.div`
    -webkit-box-flex: 0;
    -ms-flex: 0 0 50%;
    flex: 0 0 50%;
    max-width: 50%;
    padding-right: 15px;
    padding-left: 15px;

    @media (max-width: 768px) {
        -webkit-box-flex: 0;
        -ms-flex: 0 0 100%;
        flex: 0 0 100%;
        max-width: 100%;
    }
`;

const StyledH2 = styled.h2`
    line-height: 150%;
    font-size: 22px;
    font-weight: bold;
    margin-bottom: 10px;
`;

const StyledMessageLi = styled.li`
    margin-left: 0;
    border-bottom: 1px solid #D4D4D4;
    padding-bottom: 30px;
    margin-bottom: 30px;
    height: 80px;
    display: flex;
    align-items: center;

    @media (max-width: 1024px) {
        height: auto;
    }
`;

const StyledMessageA = styled.a`
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;

    &::after{
        box-sizing: border-box;
    }

    @media (max-width: 1024px) {
        align-items: flex-start;
        flex-direction: column;
    }
`;

const StyledMessageDate = styled.span`
    color: #666666;
    font-weight: bold;
    border-right: 1px solid #D4D4D4;
    padding-right: 15px;
    padding-top: 10px;
    padding-bottom: 10px;
    margin-right: 15px;
    display: inline-block;

    @media (max-width: 1024px) {
        border: none;
    }
`;

const StyledMessageTitle = styled.span`
    width: 65%;
    line-height: 140%;
    font-size: 18px;
    padding-right: 20px;
    max-height: 50px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
`;

const StyledMessageMore = styled.span`
    background: url(https://www.wowprime.com/templates/cadiis/images/ui/more.svg) no-repeat right center;
    color: #DE052E;
    width: 90px;
    display: inline-block;

    @media (max-width: 1024px) {
        display: block;
        text-align: right;
        width: 100%;
        padding-right: 25px;
    }
`;

const Body = () => {
    const { t } = useTranslation(); 

    return (
        <div className='Body-section'>
            <StyledBG>
                <Container>
                    <StyledTitle>{t("InterestedBodyTitle")}</StyledTitle>
                    <Row style={{ marginRight: "-15px", marginLeft: "-15px" }}>
                        <StyledSubTitleWrap>
                            <StyledSubTitleContent>
                                <StyledSubTitleIcon>
                                    <StyledSubTitleImg src="https://www.wowprime.com/templates/cadiis/images/ui/finance-news-icon.svg" alt="" />
                                </StyledSubTitleIcon>
                                <StyledTxtWrap>
                                    <StyledSubTitleSpan>{t("InterestedBodyTitleSpan")}</StyledSubTitleSpan>
                                </StyledTxtWrap>
                                <StyledNav>
                                        <StyledPrev />
                                        <StyledNext />
                                    </StyledNav>
                            </StyledSubTitleContent>
                        </StyledSubTitleWrap>
                        <StyledUpdateWrap>
                            <p>{t("InterestedBodyUpdateP")}</p>
                        </StyledUpdateWrap>
                        <StyledTableWrap>
                            <StyledTable>
                                <tbody>
                                    <StyledTr>
                                        <StyledTd>
                                            <StyledPtitle>{t("InterestedBodyPTitle1")}</StyledPtitle>
                                            <StyledPsubtitle>333</StyledPsubtitle>
                                        </StyledTd>
                                        <StyledTd>
                                            <StyledPtitle>{t("InterestedBodyPTitle2")}</StyledPtitle>
                                            <StyledPsubtitle>99</StyledPsubtitle>
                                        </StyledTd>
                                        <StyledTd>
                                            <StyledPtitle>{t("InterestedBodyPTitle3")}</StyledPtitle>
                                            <StyledPsubtitle>432</StyledPsubtitle>
                                        </StyledTd>
                                        <StyledTd>
                                            <StyledLastPtitle>{t("InterestedBodyPTitle4")}</StyledLastPtitle>
                                            <StyledPsubtitle>2727</StyledPsubtitle>
                                        </StyledTd>
                                    </StyledTr>
                                </tbody>
                            </StyledTable>
                        </StyledTableWrap>
                        <StyledMessageWrap>
                            <div style={{marginBottom:"50px"}}>
                                <StyledH2>{t("InterestedBodyListTitle1")}</StyledH2>
                                <ul>
                                    <StyledMessageLi>
                                        <StyledMessageA>
                                            <StyledMessageDate>2022.07.01</StyledMessageDate>
                                            <StyledMessageTitle>{t("InterestedBodyListSubTitle1")}</StyledMessageTitle>
                                            <StyledMessageMore>{t("InterestedBodyMore")}</StyledMessageMore>
                                        </StyledMessageA>
                                    </StyledMessageLi>
                                    <StyledMessageLi>
                                        <StyledMessageA>
                                            <StyledMessageDate>2021.07.01</StyledMessageDate>
                                            <StyledMessageTitle>{t("InterestedBodyListSubTitle2")}</StyledMessageTitle>
                                            <StyledMessageMore>{t("InterestedBodyMore")}</StyledMessageMore>
                                        </StyledMessageA>
                                    </StyledMessageLi>
                                    <StyledMessageLi>
                                        <StyledMessageA>
                                            <StyledMessageDate>2019.11.07</StyledMessageDate>
                                            <StyledMessageTitle>{t("InterestedBodyListSubTitle3")}</StyledMessageTitle>
                                            <StyledMessageMore>{t("InterestedBodyMore")}</StyledMessageMore>
                                        </StyledMessageA>
                                    </StyledMessageLi>
                                </ul>
                            </div>
                        </StyledMessageWrap>
                        <StyledMessageWrap>
                            <div style={{marginBottom:"50px"}}>
                                <StyledH2>{t("InterestedBodyListTitle2")}</StyledH2>
                                <ul>
                                    <StyledMessageLi>
                                        <StyledMessageA>
                                            <StyledMessageDate>2023.06.07</StyledMessageDate>
                                            <StyledMessageTitle>{t("InterestedBodyListSubTitle4")}</StyledMessageTitle>
                                            <StyledMessageMore>{t("InterestedBodyMore")}</StyledMessageMore>
                                        </StyledMessageA>
                                    </StyledMessageLi>
                                    <StyledMessageLi>
                                        <StyledMessageA>
                                            <StyledMessageDate>2023.10.06</StyledMessageDate>
                                            <StyledMessageTitle>{t("InterestedBodyListSubTitle5")}</StyledMessageTitle>
                                            <StyledMessageMore>{t("InterestedBodyMore")}</StyledMessageMore>
                                        </StyledMessageA>
                                    </StyledMessageLi>
                                    <StyledMessageLi>
                                        <StyledMessageA>
                                            <StyledMessageDate>2023.02.08</StyledMessageDate>
                                            <StyledMessageTitle>{t("InterestedBodyListSubTitle6")}</StyledMessageTitle>
                                            <StyledMessageMore>{t("InterestedBodyMore")}</StyledMessageMore>
                                        </StyledMessageA>
                                    </StyledMessageLi>
                                </ul>
                            </div>
                        </StyledMessageWrap>
                    </Row>
                </Container>
            </StyledBG>
        </div>
    );
}

export default Body