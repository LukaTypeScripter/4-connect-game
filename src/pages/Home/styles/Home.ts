import styled from "styled-components";


export const Container = styled.div`
    background-color: var(--color-dark-puprle);
    min-height: 100vh;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 0px 1.6rem;
    align-items: center;
    justify-content: center;
    position: relative;

`

export const MainMenu = styled.section`
    max-width: 48rem;
    width: 100%;
    background-color: var(--color-purple);
    border: 3px solid var(--color-black);
    border-radius: 4rem;
    box-shadow: 0px 1rem 0px var(--color-black);
`

export const InsideWrapper = styled.div`
    margin: 7rem 4rem 6rem;
    max-width: 100%;
    display: flex;
    flex-direction: column;
    gap: 7rem;
    svg {
        margin: 0 auto;
    }
`

export const BtnWrapper = styled.div`
display: flex;
flex-direction: column;
gap: 2.5rem
`