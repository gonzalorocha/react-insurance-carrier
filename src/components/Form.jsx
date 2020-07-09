import React, { useState } from 'react';
import styled from '@emotion/styled';
import { getYearDif, getIncrementByCompany, getPlan } from '../helper'

const InsuranceBase = 2000;

const options = [
    {
        id: 0,
        text: 'Select one...'
    },
    {
        id: 1,
        text: 'American'
    }, {
        id: 2,
        text: 'European'
    }, {
        id: 3,
        text: 'Asian'
    }
]

const years = [
    {
        year: 'Select one year...'
    },{
        year: '2013'
    },{
        year: '2014'
    },{
        year: '2015'
    },{
        year: '2016'
    },{
        year: '2017'
    },{
        year: '2018'
    },{
        year: '2019'
    },{
        year: '2020'
    }
];


const Field = styled.div`
    display: flex;
    margin-bottom: 1rem;
    align-items: center;
`;

const Label = styled.label`
    flex: 0 0 100px;
`;

const Select = styled.select`
    display: block;
    width: 100%;
    padding: 1rem;
    border: 1px solid #e1e1e1;
    -webkit-appearance: none;
`; 

const Radio = styled.input`
    margin: 0 1rem;

`;

const Button = styled.button`
    background-color: #00838f;
    font-size: 16px;
    width: 100%;
    padding: 1rem;
    color: #fff;
    text-transform: uppercase;
    font-weight: bold;
    border: none;
    transition: background-color .3s ease;
    margin-top: 2rem;

    &:hover {
        background-color: rgb(37, 36, 95);
        cursor: pointer;
    }
`;

const Error = styled.div`
    background-color: red;
    color: white;
    padding: 1rem;
    width: 100%;
    text-align: center;
    margin-bottom: 2rem;
`;

const Form = ({saveResume}) => {
    const [data, setData] = useState({
        company: 0,
        year: 0,
        plan: 0
    })

    const [error, setError] = useState(false);

    const onChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    } 

    const onFormSubmit = (e) => {
        e.preventDefault();
        if (data.company.trim === '' || data.year.trim === '' || data.company.trim === '' || data.company === 0 || data.year === 0){
            setError(true);
            return;
        }

        const diff = getYearDif(data.year);
        let result = InsuranceBase - ((diff * 3) * InsuranceBase) / 100;

        const plan = getPlan(data.plan);
        result = parseFloat(result * getIncrementByCompany(data.company) * plan).toFixed(2);
        console.log(result);
        saveResume({
            result,
            data
        })

    }



    return (
        <form
            onSubmit={onFormSubmit}
        >
            {
                error ? <Error>Complete all the fields</Error> : null
            }
            <Field>
                <Label>
                    Company{'   '}
                </Label>
                <Select
                    name="company"
                    value={data.company}
                    onChange={onChange}
                >
                    {
                        options.map((option) => (
                            <option  key={option.id} value={option.text}>{option.text}</option>
                        ))
                    }
                </Select>
            </Field>
            <Field>
                <Label>
                    Year{'   '}
                </Label>
                <Select
                    name="year"
                    value={data.year}
                    onChange={onChange}
                >
                    {
                        years.map((year) => (
                            <option key={year.year} value={year.year}>{year.year}</option>
                        ))
                    }
                </Select>
            </Field>
            <Field>
                <Label>
                    Plan{'   '}
                </Label>
                <label htmlFor="basic">Basic</label>
                <Radio
                    type="radio"
                    name="plan"
                    value="basic"
                    checked={data.plan === 'basic'}
                    onChange={onChange}
                />
                <label htmlFor="complete">Complete</label>
                <Radio
                    type="radio"
                    name="plan"
                    value="complet"
                    checked={data.plan === 'complet'}
                    onChange={onChange}
                />
            </Field>
            <Button type="submit">Budget</Button>
        </form>
    )
}

export default Form
