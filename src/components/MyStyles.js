import styled from 'styled-components';
import StyledP from '../StyledP';

// const condicio = this.state.numLinia
// const condicio = true

export const StyledCond = styled.p`
  // color:yellow;
  background pink;
  max-width: 40 rem;
  margin: 5 rem auto;
  padding: 5 rem auto;
  font-style:italic;
  color: ${({ condicio }) => condicio ? "green" : "blue"};
`;

// Definim l' ESTIL de la LINIA, on el color es variable
// Pasem el #linia i la q volem resaltada

export const lineStyle = function (punterLinia, liniaResaltada) {
  return {
    color: "yellow",
    maxWidth: "40 rem",
    margin: "5 rem auto",
    fontStyle: "italic",
    background: lineColor(punterLinia, liniaResaltada),
  }
}

// Definim el COLOR de la LINIA
// Pasem el #linia i la q volem resaltada
let colorNormal = "blue", colorResaltat = "green"
const lineColor = (punterLinia, liniaResaltada) => (punterLinia == liniaResaltada ? colorResaltat : colorNormal)