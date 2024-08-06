import confetti from 'canvas-confetti'
import { useState } from 'react'
import { Square } from './components/Square.jsx'
import { TURNS } from './constants.js'
import { checkForWinner, checkEndGame } from './logic/board.js'
import {  WinnerModal } from './components/WinnerModal.jsx'
import { saveGame, resetGameStorage } from './logic/storage/index.js'



function App() {
  // Comprobamos si hay algo en localStorage y si lo hay iniciamos con eso, si no todo vacío
  const [board, setBoard] = useState(() => {
    const boardFromStorage = window.localStorage.getItem('board')
    return boardFromStorage ? JSON.parse(boardFromStorage) : Array(9).fill(null)
  })

  const [turn, setTurn] = useState(() => {
    const turnFromStorage = window.localStorage.getItem('turn')
    return turnFromStorage ?? TURNS.X
  })

  const [winner, setWinner] = useState(null) // null no hay ganador, false empate


  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)

    resetGameStorage()
  }

  const updateBoard = (index) => {
    // Negamos sobreescribir las casillas y salimos de la función
    if (board[index] || winner) return

    // Actualizamos el tablero con el evento click de cada casilla
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)

    // Para cambiar de turno
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)
    // Guardar partida
    saveGame({
      board: newBoard,
      turn: newTurn
    })
    // Comprobamos si hay ganador
    const newWinner = checkForWinner(newBoard)
    if (newWinner) {
      confetti()
      setWinner(newWinner)
    } else if (checkEndGame(newBoard)) {
      setWinner(false)
    }
  }


  return (
    <main className='board'>
      <h1>Tic Tac Toe</h1>
      <button onClick={resetGame}>New game</button>
    
      <section className='game'>
        {
          board.map((square, index) => {
            return (
              <Square
                key={index}
                index={index}
                updateBoard={updateBoard}
              >
                {square}
              </Square>
            )
          })
        }
      </section>

      <section className='turn'>
        <Square isSelected={turn === TURNS.X}>
          {TURNS.X}
        </Square>
        <Square isSelected={turn === TURNS.O}>
          {TURNS.O}
        </Square>
      </section>
      <WinnerModal resetGame={resetGame} winner={winner} />

      
    </main>
  )
}

export default App
