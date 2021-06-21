import logo from './logo.svg';
import './App.css';

import textosTeatre from "./textosTeatre.json"

function App() {
  const listTeatre = textosTeatre.map
    (
      teatre => <p>{teatre}</p>
    )
    
  return (
    <div>
      {listTeatre}
    </div>
  )
}

export default App;