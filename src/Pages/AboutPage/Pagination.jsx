import React from 'react';
import styled from 'styled-components';
import { ResetStyle, Container, Row } from '../../components/globalStyle';
import { Pagination } from 'antd';

const Wrap = styled.div`
    margin-top: 80px;
    text-align: center;
    display: block;
    padding-bottom: 60px;


    .ant-pagination-item{
        margin:  0 10px;

        color: #333;
        border: none;
        text-decoration: none;
        background: #eee;
        width: 35px;
        height: 35px;
        border-radius: 50%;

    }

    .ant-pagination-item-active{
        background: #DE052E;
        font-size: 13px;
        width: 35px;
        height: 35px;
        border-radius: 50%;
        border-color: #fff;
        
        & a{
            color: #fff;
        }

        & a:hover{
            color: #fff;
        }
    }


`;


const Page = () => {

    return(
        <div className='Page-section'>
            <Wrap>
                <Pagination defaultCurrent={1} total={50} />
            </Wrap>
        </div>
    );
}

export default Page;