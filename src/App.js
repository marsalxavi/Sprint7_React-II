import logo from './logo.svg';
import './App.css';

import textosTeatre from "./textosTeatre.json"
import React from 'react';

import StyledP from "./StyledP.js"
import { StyledCond, lineStyle } from "./components/MyStyles.js"

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      numLinia: textosTeatre.length //init numLinia a linies text
    }
    this.lineUp = this.lineUp.bind(this)
    this.lineDown = this.lineDown.bind(this)
  }

  lineUp() { //linia següent
    this.setState(prevState => {
      return {
        numLinia: prevState.numLinia + 1
      }
    })
  }

  lineDown() { //linia anterior
    this.setState(prevState => {
      return {
        numLinia: prevState.numLinia - 1
      }
    })
  }

  render() {
    // Escribim el text resaltan linia quan es igual al index
    const listTeatreCond = textosTeatre.map
      (
        (teatre, index) => <p style={lineStyle(index + 1, this.state.numLinia)}>{index + 1} - {teatre}</p>
      )

    return (
      <div>
        <button type="submit" onClick={this.lineDown} class="btn btn-primary">Linia Anterior</button>
        <button type="submit" onClick={this.lineUp} class="btn btn-success">Linia Següent</button>
        <StyledCond>Numero de línia: {this.state.numLinia}</StyledCond>
        {listTeatreCond}
      </div >
    )
  }
}

export default App;