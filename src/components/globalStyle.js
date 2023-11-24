import styled, { createGlobalStyle,css } from "styled-components";

export const ResetStyle = createGlobalStyle`
*{
    position: relative;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    border: 0;
    font: inherit;
    font-size: 100%;
    vertical-align: baseline;
}
img{
    vertical-align: middle;
    border-style: none;
    width: 100%;
}
a{
    color: #000;
    text-decoration:none;
}
ol,ul{
    list-style: none;
}
`;

export const Container = styled.div`
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
    @media (min-width: 576px){
        max-width: 540px;
    }
    @media (min-width: 768px){
        max-width: 720px;
    }
    @media (min-width: 992px){
        max-width: 960px;
    }

    @media (min-width: 1200px){
        max-width: 1140px;
    }
    @media (min-width: 1600px){
        max-width: 1400px;
    }



`;

export const Row = styled.div`
    display: flex;
    flex-wrap: wrap;
    /* margin-right: -15px;
    margin-left: -15px; */

    ${props =>
    props.alignCenter &&
    css`
      align-items: center;
    `}

    @media (max-width: 760px) {
      ${props =>
      props.vertical &&
      css`
        flex-direction: column;
      `}

      ${props =>
        props.alignCenter760 &&
        css`
        align-items: center;
        `}
    }
`;

export const A = styled.a`
    color: #000;
    text-decoration:none;
`;
