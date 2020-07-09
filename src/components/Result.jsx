import React from 'react'
import styled from '@emotion/styled';

const Message = styled.p`
    background-color: rgb(127,224,237);
    margin-top: 2rem;
    padding: 1rem;
    text-align: center;
`;

const ResultDiv = styled.div`
    text-align: center; 
    padding: .5rem;
    border: 1px solid #26c6da;
    background-color: #00838f;
    margin-top: 1rem; 
    position: relative;
`;

const TotalMessage = styled.p`
    color: #00838f;
    padding: 1rem;
    text-transform: uppercase;
    font-weight: bold;
    margin: 0;
`;

const Result = ({result}) => {
    if(result === 0) return null;
    
    return (
        (result === 0) ? 
            <Message>Choose a company, year and type...</Message> 
        : 
        (
            <ResultDiv>
                <TotalMessage> Total: {result}</TotalMessage>
            </ResultDiv>
        )

    )

}

export default Result;