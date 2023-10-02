import React, {useEffect} from 'react';
import Square from "./Square.tsx";

export type Player = "X" | "O" | "DRAW" | null;

const Board = () => {
    const [squares, setSquares] = React.useState(Array(9).fill(null))
    const [currentPlayer, setCurrentPlayer] = React.useState<"X" | "O">(
        Math.round(Math.random()) ? "X" : "O"
    )
    const [winner, setWinner] = React.useState<Player>(null)

    const setSquareValue = (index: number) => {
        const newSquares = squares.map((square, i) => {
            if (i === index) {
                return currentPlayer
            }
            return square
        })
        setSquares(newSquares)
        setCurrentPlayer(currentPlayer === "X" ? "O" : "X")
    }
    const playAgain = () => {
        setSquares(Array(9).fill(null))
        setCurrentPlayer(Math.round(Math.random()) ? "X" : "O")
        setWinner(null)
    }
    const checkWinner = (squares: Player[]) => {
        const lines = [
            [0, 1, 2], // horizontal
            [3, 4, 5], // horizontal
            [6, 7, 8], // horizontal
            [0, 3, 6], // vertical
            [1, 4, 7], // vertical
            [2, 5, 8], // vertical
            [0, 4, 8], // diagonal
            [2, 4, 6], // diagonal
        ]

        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i]
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a]
            }
        }
    }

    useEffect(() => {
        const winner = checkWinner(squares)
        if (winner) {
            setWinner(winner)
        }
        if (!winner && !squares.includes(null)) {
            setWinner("DRAW")
        }
    }, [squares])

    return (
        <>
            {
                winner ?
                    <span><b className={`${winner.toLowerCase()}`}>{winner}</b> {winner === "DRAW" ? "" : "won"}!</span>
                    :
                    <span>Now is <b className={`${currentPlayer.toLowerCase()}`}>{currentPlayer}</b>'s turn</span>
            }
            <div className="board">
                {
                    squares.map((_, index) => {
                        return (
                            <Square
                                key={index}
                                winner={winner}
                                onClick={() => setSquareValue(index)}
                                value={squares[index]}
                            />
                        )
                    })
                }
            </div>
            <button
                onClick={playAgain}
                className={'again'}
            >
                PLAY AGAIN!
            </button>
        </>

    )
}

export default Board;