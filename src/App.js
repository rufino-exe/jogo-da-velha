import { useState } from 'react';
import './App.css';


function Square(){
  const[valor, setValor] = useState(null)

  function handleClick(){
    setValor("X")
  }

  return(
    <button classname="square" onClick={handleClick}>{valor}</button>
  );
}

export default function Tabuleiro(){
  return(
    <div>
      <div>
        <Square/>
        <Square/>
        <Square/>
      </div>
      <div>
        <Square/>
        <Square/>
        <Square/>
      </div>
      <div>
        <Square/>
        <Square/>
        <Square/>
      </div>
    </div>
  );
}