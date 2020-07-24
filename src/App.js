import React, {useState, useEffect} from 'react';
import styled from '@emotion/styled';
import Sentences from "./components/Sentences";

const ContainerDiv = styled.div`
  display: flex;
  align-items: center;
  padding-top: 5rem;
  flex-direction: column;
`;

const Button = styled.button`
  background: -webkit-linear-gradient(top left, #007d35 0%, #007d35 40%, #0f574e 100%);
  background-size: 300px;
  font-family:  Arial, Helvetica, sans-serif;
  color: #fff;
  margin-top: 3rem;
  padding: 1rem 3rem;
  font-size: 2rem;
  border: 2px solid black;
  transition: background-size .8s ease;
  :hover {
    cursor:pointer;
    background-size: 400px;
  }
`;


function App() {

    // state of sentences
    const [sentence, saveSentences] = useState({});

    const apiRequest = async () => {
        const result = await fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes');
        const response = await result.json();
        saveSentences(response[0]);
    };

    // load sentence
    useEffect(() => {
        apiRequest();
    }, []);

    return (
        <ContainerDiv>
            <Sentences sentence={sentence}/>
            <Button onClick={apiRequest}>
                Obtener Frase
            </Button>
        </ContainerDiv>
    );
}

export default App;
