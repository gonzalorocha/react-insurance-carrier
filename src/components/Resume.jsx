import React, { Fragment } from 'react'
import styled from '@emotion/styled';
import { firstWordUpper } from './../helper';

const Container = styled.div`
    padding: 1rem;
    text-align: center;
    margin-top: 1rem;
    background-color: #00838f;
    color: #fff;
`


const Resume = ({data}) => {
    const {company, year, plan} = data;

    if (company === '' ||year === '' ||plan === ''){
        return null;
    }

    return (
        <Container>
            <h2>Resume</h2>
            <ul>
                <li>Company: {firstWordUpper(company)}</li>
                <li>Year: {year}</li>
                <li>plan: {firstWordUpper(plan)}</li>
            </ul>
        </Container>
    )


}

export default Resume;