import { createGlobalStyle } from "styled-components";



export const GlobalStyles = createGlobalStyle`

:root {

/* Primary */

--color-black:#000000;
--color-dark-purple:#5C2DD5;
--color-purple:#7945FF;
--color-red:#FD6687;
--color-yellow:#FFCE67;
--color-white:#FFFFFF;



/*  Font sizes*/
--font-size-heading-l: 56px;
--font-size-heading-m: 24px;
--font-size-heading-s: 20px;
--font-size-heading-xs: 16px;

--font-size-body: 16px;


/*  Font line height*/
--font-line-heading-l:71px;
--font-line-heading-m:31px;
--font-line-heading-s:26px;
--font-line-heading-xs:21px;


--font-line-body:21px;



}

*,
*::after,
*::before {
margin: 0;
padding: 0;
box-sizing: border-box;
}

html {
  font-size: 10px;

}

body {
  font-size: var(--font-size-body);
  line-height: var(--font-line-body);
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 500;
  background-color: var(--color-purple);
  color: var(--color-black);

  position: relative;


}

#root {
  height: 100%;
}
.app {
    max-width: 100%;
    width: 100%;
   height: 100%;
   padding: 2.7rem 0;
  
    
  }

  h1,h2,h3,h4 {
    font-family: 'Space Grotesk', sans-serif;
    font-weight: bold;
  }

`;