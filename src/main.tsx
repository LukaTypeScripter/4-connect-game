import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { GlobalStyles } from './styles/GlobalStyles.ts'
import  { MainBoardContextProvider } from './contexts/Mainboards.tsx'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GlobalStyles />
    <MainBoardContextProvider>
    <App />
    </MainBoardContextProvider>
  </React.StrictMode>,
)
