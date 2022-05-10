import React, {useState} from "react";
import "./Board.css"
import Modal from "../modal/Modal";

const Board = () => {
    const [board, setBoard] = useState(Array(9).fill(null))
    const [turn, setTurn] = useState("X")
    const [winner, setWinner] = useState(null)
    const clickHandler = (index) => {
        if (!board[index] && !winner) {
            let copyBoard = [...board]
            copyBoard[index] = turn
            setBoard(copyBoard)
            setTurn(prev => prev === "X" ? "O" : "X")
            winnerHandler(copyBoard)

        }
    }
    const winnerHandler = (boardData) => {
        const lines = [[0, 1, 2],[3, 4, 5],[6, 7, 8],[0, 3, 6],[1, 4, 7],[2, 5, 8],[0, 4, 8],[2, 4, 6]];
        if(boardData.every((item)=>item!==null)){
            setWinner(`Draw try again`)
        }else{
            for (let i = 0; i<lines.length ; i++){
                let [a, b, c] = lines[i]
                if (boardData[a] && boardData[a] === boardData[b] && boardData[a] === boardData[c]) {
                    setWinner(`CONGRATS Player ${boardData[a]} You Win`)
                }
            }
        }
    }
    const resetHandler = () =>{
        setWinner(null)
        setBoard(Array(9).fill(null))
    }
    return (
        <div>
            {!winner&& <h3>Turn : Player {turn}</h3>}
            {winner && <Modal winner={winner} resetHandler={resetHandler}/>}
            <div className={`board`}>
                {
                    board.map((item, index) => (
                        <div key={index} className={`squares`} onClick={() => clickHandler(index)}
                             style={{
                                 color: board[index] === "X" ? "blue" : "red"
                             }}
                        >
                            {board[index]}
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Board
