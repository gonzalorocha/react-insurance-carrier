import React from 'react';
import './index.css';
import styled from '@emotion/styled';

import Header from './components/Header';
import Form from './components/Form';

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;

`;

const FormContainer = styled.div`
  background-color: #fff;
  padding: 3rem;
`;

const App = () => {
  return (
    <Container>
      <Header
        title="Insurance carrier"
      />
      <FormContainer>
        <Form />
      </FormContainer>
    </Container> 
  );
}

export default App;