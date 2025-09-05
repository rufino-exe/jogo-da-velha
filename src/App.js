import { useState } from 'react'
import './App.css'

function Square({valor, onSquareClick}){
  return(
    <button classname="square" onClick={onSquareClick}>
      {valor}
    </button>
  );
}

export default function Tabuleiro(){
  const [xIsNext, setXIsNext] = useState(true)
  const [squares, setSquares] = useState(Array(9).fill(null))

  function handleClick(i){
    const nextSquares = squares.slice()

    if(nextSquares[i] || calculaVencedor(squares)){
      return
    }
    if(xIsNext){
      nextSquares[i] = 'X'
      setXIsNext(false)
    }
    else{
      nextSquares[i] = 'O'
      setXIsNext(true)
    }
      setSquares(nextSquares)
  }

  return(
    <div>
      <div>
        <Square valor={squares[0]} onSquareClick={()=>handleClick(0)}/>
        <Square valor={squares[1]} onSquareClick={()=>handleClick(1)}/>
        <Square valor={squares[2]} onSquareClick={()=>handleClick(2)}/>
      </div>
      <div>
        <Square valor={squares[3]} onSquareClick={()=>handleClick(3)}/>
        <Square valor={squares[4]} onSquareClick={()=>handleClick(4)}/>
        <Square valor={squares[5]} onSquareClick={()=>handleClick(5)}/>
      </div>
      <div>
        <Square valor={squares[6]} onSquareClick={()=>handleClick(6)}/>
        <Square valor={squares[7]} onSquareClick={()=>handleClick(7)}/>
        <Square valor={squares[8]} onSquareClick={()=>handleClick(8)}/>
      </div>
    </div>
  );
}
function calculaVencedor(squares){
  const lines = [[0,1,2], [3,4,5], [6,7,8], [0,3,6],
                [1,4,3],[2,5,8], [0,4,8], [2,4,6]]

  for( let i = 0; i<lines.length; i++){
    const [a,b,c] = lines[i]

    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
    return squares[a]
    }
  }
    return null
}