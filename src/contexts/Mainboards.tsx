import React, { createContext, useState, } from "react";
import { MainBoardContextValue, initialContextValue } from "./types/Mainboard";

const MainBoardContext = createContext<MainBoardContextValue>(initialContextValue);
export const  MainBoardContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
 
     // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [showImage, setShowImage] = useState(false);
  const [position, setPosition] = useState("");
  const [currentPlayer, setCurrentPlayer] = useState("Player1");
  const [timer, setTimer] = useState(30);
  const createEmptyBoard = () => {
    const rows = 6;
    const columns = 7;
    return Array.from({ length: rows }, () => Array(columns).fill(null));
  };
  const [board, setBoard] = useState(createEmptyBoard());
  const [winner,setWinner] = useState("")
  const [gameEnds,setGameEnds] = useState(false)
  const [winPoints,setWInPoints] = useState({
    player1:0,
    player2:0
  })
  const [timerPaused,setTimerPaused] = useState(false)
  const [menuModal,setMenuModal] = useState(false)
  const playAgain = () => {
    setWinner("");
    setGameEnds(false);
    setBoard(createEmptyBoard())
    setTimer(30)
  };
  const resetGame = () => {
    setBoard(createEmptyBoard());
    setWinner("");
    setGameEnds(false);
    setCurrentPlayer("Player1");
    setTimer(30)
    setMenuModal(false)
    setTimerPaused(false)
  };
  const openMenuModal = () => {
    setMenuModal(!menuModal)
    setTimerPaused(!timerPaused)
  }
  const handleColumnClick = (columnIndex: number) => {
    if (!gameEnds) {
    const rowIndex = findLowestEmptyRow(columnIndex);
  
    if (rowIndex !== -1) {
      const newBoard = [...board];
      newBoard[rowIndex][columnIndex] = currentPlayer;
  
      if (checkWinCondition(rowIndex, columnIndex)) {
        setWinner(currentPlayer)
        setGameEnds(true)
        if(currentPlayer === "Player1") {
          setWInPoints((prevPoints) => ({
              ...prevPoints,
              player1:prevPoints.player1+1
          }))
        }else {
          setWInPoints((prevPoints) => ({
            ...prevPoints,
            player2:prevPoints.player2+1
        }))
        }
      } else {
        setCurrentPlayer(currentPlayer === "Player1" ? "Player2" : "Player1");
        setBoard(newBoard);
      }
    }
  }
  };
  const findLowestEmptyRow = (columnIndex:number) => {
    for (let rowIndex = board.length - 1; rowIndex >= 0; rowIndex--) {
      if (!board[rowIndex][columnIndex]) {
        return rowIndex;
      }
    }
    return -1;
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const checkWinCondition = (rowIndex: number, columnIndex: number) => {
    const currentPlayerValue = board[rowIndex][columnIndex];
    
    // Horizontal check
    for (let col = 0; col <= board[rowIndex].length - 4; col++) {
      if (
        board[rowIndex][col] === currentPlayerValue &&
        board[rowIndex][col + 1] === currentPlayerValue &&
        board[rowIndex][col + 2] === currentPlayerValue &&
        board[rowIndex][col + 3] === currentPlayerValue
      ) {
        return true;
      }
    }
  
    // Vertical check
    for (let row = 0; row <= board.length - 4; row++) {
      if (
        board[row][columnIndex] === currentPlayerValue &&
        board[row + 1][columnIndex] === currentPlayerValue &&
        board[row + 2][columnIndex] === currentPlayerValue &&
        board[row + 3][columnIndex] === currentPlayerValue
      ) {
        return true;
      }
    }
  
    // Diagonal (right-down) check
    for (let row = 0; row <= board.length - 4; row++) {
      for (let col = 0; col <= board[row].length - 4; col++) {
        if (
          board[row][col] === currentPlayerValue &&
          board[row + 1][col + 1] === currentPlayerValue &&
          board[row + 2][col + 2] === currentPlayerValue &&
          board[row + 3][col + 3] === currentPlayerValue
        ) {
          return true;
        }
      }
    }
  
    // Diagonal (left-down) check
    for (let row = 0; row <= board.length - 4; row++) {
      for (let col = 3; col < board[row].length; col++) {
        if (
          board[row][col] === currentPlayerValue &&
          board[row + 1][col - 1] === currentPlayerValue &&
          board[row + 2][col - 2] === currentPlayerValue &&
          board[row + 3][col - 3] === currentPlayerValue
        ) {
          return true;
        }
      }
    }
  
    return false;
  };

 
  const value: MainBoardContextValue = {
    checkWinCondition,
    handleColumnClick,
    setPosition,
    setShowImage,
    currentPlayer,
    position,
    showImage,
    board,
    setBoard,
    setCurrentPlayer,
    setWinner,
    winner,
    gameEnds,
    winPoints,
    playAgain,
    timer,
    setTimer,
    resetGame,
    timerPaused,
    openMenuModal,
    menuModal,
    setMenuModal
  };
 
  return <MainBoardContext.Provider value={value}>{children}</MainBoardContext.Provider>;
};

export default MainBoardContext;