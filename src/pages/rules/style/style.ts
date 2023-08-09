import styled from "styled-components";
import { Container, MainMenu } from "../../Home/styles/Home";


export const RulesCont = styled(Container)`
background-color: var(--color-purple);
`
export const RulesMain = styled(MainMenu)`
    background-color: var(--color-white);
`
export const RulesInside = styled.div`
    margin: 3rem 3.4rem 5.4rem;
    max-width: 100%;
    display: flex;
    flex-direction: column;
    gap: 3rem;
    position: relative;
`

export const RulesHeaderTExt = styled.h1`
    color: var(--color-black);
    font-size: var(--font-size-heading-l);
    line-height: var(--font-line-heading-l);
    text-transform: uppercase;
    text-align: center;
`
export const MainRUlesWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 3rem;
  svg {
    position: absolute;
   left: 40%;
   bottom: -9.5rem;
  }
`
export const SubHeader = styled.h3`
    font-size: var(--font-size-heading-s);
    line-height: var(--font-line-heading-s);
    text-transform: uppercase;
    text-align: left;
    color: var(--color-purple);
    margin-bottom: 1.6rem;
`
export const SubText = styled.p`
    opacity: 0.66;
`

export const Ruleswrap = styled.div`
    display: flex;
    gap: 1.6rem;
    margin-bottom: 1rem;
    h4 {
        font-size: var(--font-size-heading-xs);
    line-height: var(--font-line-heading-xs);
    text-transform: uppercase;
    text-align: left;
    }
    span {
        opacity: 0.66;
    }
`