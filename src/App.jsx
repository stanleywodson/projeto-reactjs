import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [estado, setEstado] = useState('ENTRADA')
  const [palpite, setPalpite] = useState(150)
  const [numPalpite, setNumPalpite] = useState(1)

  const [min, setMin] = useState(0)
  const [max, setMax] = useState(300)

  const iniciarJogo = () =>{
    setEstado('RODANDO')
    setMax(300)
    setMin(0)
    setPalpite(150)
    setNumPalpite(1)
  }

  if(estado === 'ENTRADA'){
    return <button onClick={iniciarJogo}>Começar a jogar!</button>
  }

  const menor = () =>{
    setNumPalpite(numPalpite + 1)
    setMax(palpite)
    const proxPalpite = parseInt((palpite - min) / 2) + min
    setPalpite(proxPalpite)
  }
  const maior = () => {
    setNumPalpite(numPalpite +1)
    setMin(palpite)
    const proxPalpite = parseInt((max - palpite) / 2) + palpite
    setPalpite(proxPalpite)
  }
  const acertou = () => {
    setEstado('FIM')
  }

  if(estado === 'FIM'){
    return (
      <div>
        <p>Acertei o número {palpite} com {numPalpite} chutes!</p>
        <button onClick={iniciarJogo}>Iniciar Novamente?</button>
      </div>
    )
    
  }

  return (
    <div className="App">
        <p>número palpite {numPalpite}</p>
        <p>O seu número é {palpite} ?</p>
        <p>Min {min} / Max {max}</p>
        <button onClick={menor}>Menor!</button>
        <button onClick={acertou}>Acertou!</button>
        <button onClick={maior}>Maior!</button>
    </div>
  )
}

export default App
