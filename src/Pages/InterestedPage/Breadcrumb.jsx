import React from 'react';
import styled from 'styled-components';
import {  Container } from '../../components/globalStyle';
import { Breadcrumb } from 'antd';

const BreadcrumbsWrap =styled.div`
    ol{
        background: none;
        margin: 10px 0;
        padding: 0;
        line-height: 200%;
    }
`;
const Breadcrumbs = () => {

    return(
        <div className='Breadcrumbs-section'>
            <Container>
                <BreadcrumbsWrap>
                <Breadcrumb
                        separator=">"
                        items={[
                        {
                            title: '首頁',
                            href: '',
                        },
                        {
                            title: '投資人專區',
                        },
                        ]}
                    />
                </BreadcrumbsWrap>
            </Container>
        </div>
    );
}

export default Breadcrumbs;