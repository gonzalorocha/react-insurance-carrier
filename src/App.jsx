import React, { useState } from 'react';
import './index.css';
import styled from '@emotion/styled';

import Header from './components/Header';
import Form from './components/Form';
import Resume from './components/Resume';
import Result from './components/Result';


const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;

`;

const FormContainer = styled.div`
  background-color: #fff;
  padding: 3rem;
`;

const App = () => {
  const [resume, setResume] = useState({
    result: 0,
    data: {
      company: '',
      year: '',
      plan: ''
    }
  });


  return (
    <Container>
      <Header
        title="Insurance carrier"
      />
      <FormContainer>
        <Form 
          saveResume={setResume}
        />
        <Resume
          data={resume.data}
        />
        <Result
          result={resume.result}
        />
      </FormContainer>
    </Container> 
  );
}

export default App;