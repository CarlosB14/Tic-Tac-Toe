import { WINNER_COMBOS } from '../constants.js'

export const checkForWinner = (boardToCheck) => {
    // Check si hay ganador comparando que las casillas sean iguales como X o como O
    for (const combo of WINNER_COMBOS) {
      const [a, b, c] = combo
      if (
        boardToCheck[a] &&
        boardToCheck[a] === boardToCheck[b] &&
        boardToCheck[a] === boardToCheck[c])
        {
          return boardToCheck[a]
        }
    }
    // No hay ganador
    return null
  }

 export const checkEndGame = (newBoard) => {
    return newBoard.every((square) => square !== null)
  }