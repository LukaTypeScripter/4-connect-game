export interface MainBoardContextValue {
    checkWinCondition: (rowIndex: number, columnIndex: number) => boolean;
    handleColumnClick: (columnIndex: number) => void;
    setPosition: React.Dispatch<React.SetStateAction<string>>;
    setShowImage: React.Dispatch<React.SetStateAction<boolean>>;
    currentPlayer: string;
    position: string;
    showImage: boolean;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    setBoard: React.Dispatch<React.SetStateAction<any[][]>>
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    board: any[][]
    setCurrentPlayer:React.Dispatch<React.SetStateAction<string>>;
    setWinner:React.Dispatch<React.SetStateAction<string>>
    winner:string
    gameEnds:boolean
    winPoints: {
      player1: number;
      player2: number;
  }
  playAgain: () => void
  timer: number
  setTimer:React.Dispatch<React.SetStateAction<number>>
  resetGame: () => void
  timerPaused:boolean
  openMenuModal: () => void
  menuModal:boolean
  setMenuModal:React.Dispatch<React.SetStateAction<boolean>>
  }
  
  export const initialContextValue: MainBoardContextValue = {
    checkWinCondition: () => false,
    handleColumnClick: () => {},
    setPosition: () => {},
    setShowImage: () => {},
    currentPlayer: '',
    position: '',
    showImage: false,
    setBoard: () => {},
    board: [],
    setCurrentPlayer:() => {},
    setWinner: () => {},
    winner:'',
    gameEnds:false,
    winPoints: {
      player1: 0,
      player2: 0,
  },
  playAgain:() => {},
  timer:30,
  setTimer:() => {},
  resetGame: () => {},
  timerPaused:false,
  openMenuModal:() => {},
  menuModal:false,
  setMenuModal:() => {},
  }