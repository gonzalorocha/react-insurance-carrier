import React from 'react';
import styled from '@emotion/styled';

const HeaderContainer = styled.header`
    background-color: rgb(9, 8, 88);
    padding: 10px;
    font-weight: bold;
    color: #fff;
`;

const HeaderText = styled.h1`
    font-size: 2rem;
    margin: 0;
    font-family: 'slabo 27px', serif;
    text-align: center;
`;


const Header = ({title}) => {
    return (
        <HeaderContainer>
            <HeaderText>
                {title}
            </HeaderText>
        </HeaderContainer>
    )
}

export default Header
