import styled from "styled-components";
import {
  boardLayerWhiteLarge, counterRedLarge, counterYellowLarge,
} from "../../assets/images";
import React, { useState } from "react";
import { ThirdColumn, fifthColumn, firstColumn, fourthColumn, secondColumn, seventhColumn, sixthColumn } from "./gameStyles/funcs/MainBoardFuncs";

function MainBoard() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [showImage, setShowImage] = useState(false);
  const [position, setPosition] = useState("");
  const [currentPlayer, setCurrentPlayer] = useState("Player1");
 
  const createEmptyBoard = () => {
    const rows = 6;
    const columns = 7;
    return Array.from({ length: rows }, () => Array(columns).fill(null));
  };
  const [board, setBoard] = useState(createEmptyBoard());


  
  const handleColumnClick = (columnIndex: number) => {
    const rowIndex = findLowestEmptyRow(columnIndex);
  
    if (rowIndex !== -1) {
      // Check if the column index is within bounds
      if (columnIndex >= 0 && columnIndex < board[0].length) {
        const newBoard = [...board];
        // Check if the row index is within bounds
        if (rowIndex >= 0 && rowIndex < newBoard.length) {
          newBoard[rowIndex][columnIndex] = currentPlayer;
          setBoard(newBoard);
  
          if (checkWinCondition(rowIndex, columnIndex)) {
            console.log(`${currentPlayer} wins!`);
            // Handle game over logic here
          } else {
            setCurrentPlayer(currentPlayer === "Player1" ? "Player2" : "Player1");
          }
        } else {
          console.log("Invalid row index");
        }
      } else {
        console.log("Invalid column index");
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
  const checkWinCondition = (rowIndex:number, columnIndex:number,board?:any) => {
    //CHeck horizontaly
    for(let c = 0; c <=7 - 4;c++) {
      if(
        board[rowIndex][c] === currentPlayer &&
        board[rowIndex][c+1] === currentPlayer&&
        board[rowIndex][c+2] === currentPlayer&&
        board[rowIndex][c+3] === currentPlayer
      ){
        return true
      }
    }
     //CHeck verticly
     for(let c = 0; c <=7 - 4;c++) {
      if(
        board[rowIndex][columnIndex] === currentPlayer &&
        board[rowIndex + 1][columnIndex] === currentPlayer&&
        board[rowIndex + 2][columnIndex] === currentPlayer&&
        board[rowIndex + 3][columnIndex] === currentPlayer
      ){
        return true
      }
    }
    //check diagonally
    for(let r = 0; r <=7 - 4;r++) {
      for(let c = 0;c <= 6 - 4;c++) {
      if(
        board[r][c] === currentPlayer &&
        board[r+1][c+1] === currentPlayer&&
        board[r+2][c+2] === currentPlayer&&
        board[r+3][c+3] === currentPlayer
      ){
        return true
      }
    }
    }
    for(let r = 0; r <=7 - 4;r++) {
      for(let c = 0;c <= 6 - 4;c++) {
      if(
        board[r][c] === currentPlayer &&
        board[r+1][c-1] === currentPlayer&&
        board[r+2][c-2] === currentPlayer&&
        board[r+3][c-3] === currentPlayer
      ){
        return true
      }
    }
    }
    return false;
  };

  return (
    <MainBoardCont position={position}>
      <Player1>
        <h3>you</h3>
        <h2>0</h2>

        <svg
          width="54px"
          height="59px"
          viewBox="0 0 54 59"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <title>player-one</title>
          <g
            id="Designs"
            stroke="none"
            strokeWidth="1"
            fill="none"
            fillRule="evenodd"
          >
            <g id="player-one">
              <circle
                id="Oval-Copy-21"
                fill="#000000"
                cx="27"
                cy="27"
                r="27"
              ></circle>
              <circle
                id="Oval-Copy-40"
                fill="#000000"
                cx="27"
                cy="32"
                r="27"
              ></circle>
              <circle
                id="Oval-Copy-11"
                fill="#FD6687"
                cx="27"
                cy="27"
                r="24"
              ></circle>
              <g
                id="Group-8"
                transform="translate(19.000000, 17.000000)"
                stroke="#000000"
                strokeWidth="3"
              >
                <path
                  d="M6,26.75 C12.627417,26.75 18,21.377417 18,14.75 C18,8.122583 12.627417,2.75 6,2.75"
                  id="Oval-Copy-11"
                  transform="translate(12.000000, 14.750000) rotate(90.000000) translate(-12.000000, -14.750000) "
                ></path>
                <g id="Group-7" transform="translate(9.750000, 0.000000)">
                  <line
                    x1="0.5"
                    y1="0"
                    x2="0.5"
                    y2="5.9844035"
                    id="Path"
                  ></line>
                  <line
                    x1="10.5"
                    y1="0"
                    x2="10.5"
                    y2="5.9844035"
                    id="Path-Copy"
                  ></line>
                </g>
              </g>
            </g>
          </g>
        </svg>
      </Player1>
      <div className="board">
        <img src={boardLayerWhiteLarge} alt="" className="white" />
        <div className="control">
          <div className="control__header">
            <div className="control__header__img">
              <svg
                width="38"
                height="36"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <defs>
                  <filter
                    x="-17.2%"
                    y="-16.4%"
                    width="134.4%"
                    height="156.8%"
                    filterUnits="objectBoundingBox"
                    id="a"
                  >
                    <feMorphology
                      radius="3"
                      operator="dilate"
                      in="SourceAlpha"
                      result="shadowSpreadOuter1"
                    />
                    <feOffset
                      dy="5"
                      in="shadowSpreadOuter1"
                      result="shadowOffsetOuter1"
                    />
                    <feComposite
                      in="shadowOffsetOuter1"
                      in2="SourceAlpha"
                      operator="out"
                      result="shadowOffsetOuter1"
                    />
                    <feColorMatrix
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"
                      in="shadowOffsetOuter1"
                    />
                  </filter>
                  <path
                    d="m882.01 132.377 10.932-8.157a5 5 0 0 1 5.96-.015l11.068 8.172A5 5 0 0 1 912 136.4v6.6a5 5 0 0 1-5 5h-22a5 5 0 0 1-5-5v-6.616a5 5 0 0 1 2.01-4.007Z"
                    id="b"
                  />
                </defs>
                <g
                  transform="matrix(1 0 0 -1 -877 156)"
                  fill="none"
                  fillRule="evenodd"
                >
                  <use fill="#000" filter="url(#a)" xlinkHref="#b" />
                  <path
                    stroke="#000"
                    strokeWidth="3"
                    d="M895.916 121.727a6.49 6.49 0 0 1 3.877 1.271l11.068 8.173a6.5 6.5 0 0 1 2.639 5.229v6.6a6.48 6.48 0 0 1-1.904 4.596A6.48 6.48 0 0 1 907 149.5h-22a6.48 6.48 0 0 1-4.596-1.904A6.48 6.48 0 0 1 878.5 143v-6.616a6.5 6.5 0 0 1 2.613-5.21l10.932-8.157a6.49 6.49 0 0 1 3.87-1.29Z"
                    fill="#FD6687"
                  />
                </g>
              </svg>
            </div>
          </div>
          <Cols
            data-columnnum="0"
            data-testid="column0"
            onMouseEnter={() => firstColumn(setPosition,setShowImage)}
            onMouseLeave={() => setShowImage(false)}
            onClick={() => handleColumnClick(0)}
          ></Cols>
          <Cols
            data-columnnum="1"
            data-testid="column0"
            onMouseEnter={() => secondColumn(setPosition,setShowImage)}
            onMouseLeave={() => setShowImage(false)}
            onClick={() => handleColumnClick(1)}
          ></Cols>
          <Cols data-columnnum="2" data-testid="column0"
            onMouseEnter={() => ThirdColumn(setPosition,setShowImage)}
            onMouseLeave={() => setShowImage(false)}
            onClick={() => handleColumnClick(2)}
          ></Cols>
          <Cols data-columnnum="3" data-testid="column0"
          onMouseEnter={() => fourthColumn(setPosition,setShowImage)}
          onMouseLeave={() => setShowImage(false)}
          onClick={() => handleColumnClick(3)}
          ></Cols>
          <Cols data-columnnum="4" data-testid="column0"
            onMouseEnter={() => fifthColumn(setPosition,setShowImage)}
            onMouseLeave={() => setShowImage(false)}
            onClick={() => handleColumnClick(4)}
          ></Cols>
          <Cols data-columnnum="5" data-testid="column0"
            onMouseEnter={() => sixthColumn(setPosition,setShowImage)}
            onMouseLeave={() => setShowImage(false)}
            onClick={() => handleColumnClick(5)}
          ></Cols>
          <Cols data-columnnum="6" data-testid="column0"
          onMouseEnter={() => seventhColumn(setPosition,setShowImage)}
          onMouseLeave={() => setShowImage(false)}
          onClick={() => handleColumnClick(6)}
          ></Cols>
        </div>
        <CounterGrid>
  {board.map((row, rowIndex: number) => (
    <React.Fragment key={rowIndex}>
      {row.map((cell, columnIndex: number) => (
        <div
          style={{ width: '7rem', height: '7rem' }}
          key={columnIndex}
          onClick={() => checkWinCondition(rowIndex, columnIndex, board)} 
        >
          {cell === 'Player1' ? <CircleRed /> : cell === 'Player2' ? <Circle /> : null}
        </div>
      ))}
    </React.Fragment>
  ))}
</CounterGrid>
      </div>
      <Player2>
        <h3>you</h3>
        <h2>0</h2>

        <svg
          width="54px"
          height="59px"
          viewBox="0 0 54 59"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <title>player-one</title>
          <g
            id="Designs"
            stroke="none"
            stroke-width="1"
            fill="none"
            fillRule="evenodd"
          >
            <g id="player-one">
              <circle
                id="Oval-Copy-21"
                fill="#000000"
                cx="27"
                cy="27"
                r="27"
              ></circle>
              <circle
                id="Oval-Copy-40"
                fill="#000000"
                cx="27"
                cy="32"
                r="27"
              ></circle>
              <circle
                id="Oval-Copy-11"
                fill="#FD6687"
                cx="27"
                cy="27"
                r="24"
              ></circle>
              <g
                id="Group-8"
                transform="translate(19.000000, 17.000000)"
                stroke="#000000"
                strokeWidth="3"
              >
                <path
                  d="M6,26.75 C12.627417,26.75 18,21.377417 18,14.75 C18,8.122583 12.627417,2.75 6,2.75"
                  id="Oval-Copy-11"
                  transform="translate(12.000000, 14.750000) rotate(90.000000) translate(-12.000000, -14.750000) "
                ></path>
                <g id="Group-7" transform="translate(9.750000, 0.000000)">
                  <line
                    x1="0.5"
                    y1="0"
                    x2="0.5"
                    y2="5.9844035"
                    id="Path"
                  ></line>
                  <line
                    x1="10.5"
                    y1="0"
                    x2="10.5"
                    y2="5.9844035"
                    id="Path-Copy"
                  ></line>
                </g>
              </g>
            </g>
          </g>
        </svg>
      </Player2>
    </MainBoardCont>
  );
}
const Cols = styled.div`
  width: 7rem;
  cursor: pointer;
  &:hover {
  }
`;
const Circle = styled.div`
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background-image: url(${counterRedLarge});
    background-repeat: no-repeat;
    background-size: cover;
`
const CircleRed = styled(Circle)`
    
background-image: url(${counterYellowLarge});
`
const CounterGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    grid-template-rows: repeat(6, 1fr);
    padding: 1.7rem 1.7rem 0px;
    gap: 1.8rem;
    position: absolute;
    z-index: 3;
`
const Player1 = styled.div`
  width: 14rem;
  height: 16rem;
  border: solid 3px var(--color-black);
  box-shadow: 0px 1rem 0px var(--color-black);
  border-radius: 2rem;
  background-color: var(--color-white);
  display: flex;
  flex-direction: column;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  grid-area: player1 / player1 / player1 / player1;
  position: relative;
  align-self: center;
  h3 {
    font-size: var(--font-size-heading-s);
    line-height: var(--font-line-heading-s);
    margin-top: 3rem;
    text-transform: uppercase;
  }
  h2 {
    font-size: var(--font-size-heading-l);
    line-height: var(--font-line-heading-l);
  }
  svg {
    position: absolute;
    top: -3rem;
  }
`;
const Player2 = styled(Player1)`
  grid-area: player2 / player2 / player2 / player2;
`;

const MainBoardCont = styled.section<{ position: string }>`
  display: grid;
  margin-top: 5rem;
  gap: 6rem;
  position: relative;
  grid-template: "player1 board player2" max-content "gameInfo gameInfo gameInfo" max-content / 1fr max-content 1fr;

  .board {
    position: relative;
    width: 63.2rem;
    height: 58.4rem;
    grid-area: board / board / board / board;
    .black__large {
      width: 632px;
      height: 584px;
    }
    .white {
      position: absolute;
      z-index: 4;
    }
  }
  .control {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    padding: 0px 1.7rem;
    gap: 1.8rem;
    height: 100%;
    position: absolute;
    z-index: 6;
  }
  .control__header {
    display: grid;
    position: absolute;
    grid-template-columns: repeat(7, 1fr);
    grid-template-areas: "a b c d e f g";
    width: 100%;
    z-index: 4;
    height: 3rem;
    top: -4rem;
    padding: 0px 1.7rem;
    gap: 1.8rem;
    .control__header__img {
      grid-area: ${(props) => props.position};
      display: flex;
      -webkit-box-pack: center;
      justify-content: center;
    }
  }
  .board {
    position: relative;
    width: 63.2rem;
    height: 58.4rem;
    grid-area: board / board / board / board;
  }
`;
export default MainBoard;
