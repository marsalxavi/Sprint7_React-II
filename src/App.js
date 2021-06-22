import logo from './logo.svg';
import './App.css';

import textosTeatre from "./textosTeatre.json"
import styled from 'styled-components';


const StyledP = styled.p`
  color:yellow;
  background blue;
  max-width: 40 rem;
  margin: 5 rem auto;
  padding; 5 rem auto;
  font-size: 18 px;
  font-style:italic;
  `;

function App() {
  const listTeatre = textosTeatre.map
    (
      teatre => <StyledP>{teatre}</StyledP>
    )

  return (
    <div>
      {listTeatre}
    </div>
  )
}

export default App;