import React, { useContext } from 'react'
import styled from 'styled-components'
import Button from '../Button/Button'
import MainBoardContext from '../../contexts/Mainboards'
import { useNavigate } from 'react-router-dom'
function MenuModal() {
    const {openMenuModal,resetGame,setMenuModal} = useContext(MainBoardContext)
    const navigate = useNavigate()
    const quit = () => {
        navigate('/')
        setMenuModal(false)
    }
  return (
    <>
    <BgDark></BgDark>
    <Modal>
        <div className='modal__inside'>
            <div className='modal__inside__cont'>
                    <h1>PAUSE</h1>
                    <div className='btn__wrapper'>
                        <Button Text='CONTINUE GAME' bgColor='white' color='#000000' border='#000000' borderRadius='2rem' padding='0 1.6rem' TextAlign='center' onClick={openMenuModal}></Button>
                        <Button Text='RESTART' bgColor='white' color='#000000' border='#000000' borderRadius='2rem' padding='0 1.6rem' TextAlign='center' onClick={resetGame}></Button>
                        <Button Text='QUIT GAME' bgColor='#FD6687' color='#000000' border='#000000' borderRadius='2rem' padding='0 1.6rem' TextAlign='center' onClick={quit}></Button>
                    </div>
            </div>
        </div>
    </Modal>
    </>
  )
}
const BgDark = styled.div`
position: fixed;
top: 0;
left: 0;
width: 100%;
height:100%;
background: rgba(0, 0, 0, 0.3);
z-index: 500;
`
const Modal  = styled.div`
position: fixed;
top:50%;
left:50%;
transform: translate(-50%,-50%);
z-index: 700;
max-width: 51.8rem;
width: 100%;
padding: 0px 1.6rem;
outline: 0px;
.modal__inside {
    max-width: 48rem;
    width: 100%;
    background-color: var(--color-purple);
    border: 3px solid var(--color-black);
    border-radius: 4rem;
    box-shadow: 0px 1rem 0px var(--color-black);
    .modal__inside__cont {
        margin: 5rem 4rem;
    max-width: 100%;
    display: flex;
    flex-direction: column;
    gap: 4rem;
    h1 {
        color: var(--color-white);
    font-size: var(--font-size-heading-l);
    line-height: var(--font-line-heading-l);
    text-transform: uppercase;
    text-align: center;
    }
    .btn__wrapper {
    display: flex;
    flex-direction: column;
    gap: 2.4rem;
    }
    }
}
`
export default MenuModal