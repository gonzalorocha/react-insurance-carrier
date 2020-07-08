import React from 'react';
import styled from '@emotion/styled';


const options = [
    {
        id: 0,
        text: 'Select one...'
    },
    {
        id: 0,
        text: 'American'
    }, {
        id: 0,
        text: 'European'
    }, {
        id: 0,
        text: 'Asian'
    }
]



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
    background-color: rgb(9, 8, 88);
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


const yearOptions = () => {
    return (
        <Select>
            <option value="">-- Seleccione --</option>
            <option value="2021">2021</option>
            <option value="2020">2020</option>
            <option value="2019">2019</option>
            <option value="2018">2018</option>
            <option value="2017">2017</option>
            <option value="2016">2016</option>
            <option value="2015">2015</option>
            <option value="2014">2014</option>
            <option value="2013">2013</option>
            <option value="2012">2012</option>
        </Select>
    );
} 

const Form = () => {
    return (
        <form>
            <Field>
                <Label>
                    Company{'   '}
                </Label>
                <Select>
                    {
                        options.map((option) => (
                            <option value={option.id}>{option.text}</option>
                        ))
                    }
                </Select>
            </Field>
            <Field>
                <Label>
                    Year{'   '}
                </Label>
                {yearOptions()}
            </Field>
            <Field>
                <Label>
                    Plan{'   '}
                </Label>
                <Radio
                    type="radio"
                    name="plant"
                    value="Basic"
                />
                <Radio
                    type="radio"
                    name="plant"
                    value="Complet"
                />
            </Field>
            <Button type="button">Budget</Button>
        </form>
    )
}

export default Form
