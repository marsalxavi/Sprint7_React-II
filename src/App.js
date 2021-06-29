import logo from './logo.svg';
import './App.css';

import textosTeatre from "./textosTeatre.json"
import React from 'react';

import StyledP from "./StyledP.js"

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
    // El text sencer
    const listTeatre = textosTeatre.map
      (
        teatre => <StyledP>{teatre}</StyledP>
      )
    // nomes una linia
    const liniaTeatre =
      (
        <StyledP>{textosTeatre[this.state.numLinia - 1]}</StyledP>
      )

    return (
      <div>
        <button type="submit" onClick={this.lineDown} class="btn btn-primary">Linia Anterior</button>
        <button type="submit" onClick={this.lineUp} class="btn btn-success">Linia Següent</button>
        <p>Numero de línia: {this.state.numLinia}</p>
        {liniaTeatre}
      </div >
    )
  }
}

export default App;