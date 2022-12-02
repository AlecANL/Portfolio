import styled, { createGlobalStyle } from 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    'body-color': string
    'just-white': string
    logan: string
    'just-orange': string
    'just-pink': string
    'light-blue': string
    'dark-grey': string
    'black-currant': string
    'soft-gray': string
    'soft-black': string
    'darken-soft-gray': string
    'davys-gray': string
    'just-black': string
    white: string
  }
}

export const lightTheme = {
  'body-color': 'hsl(0, 0%, 100%)',
  'just-white': 'hsl(0, 0%, 0%)',
  'darken-soft-gray': 'hsl(0, 0%, 94%)',
  'davys-gray': 'hsl(227, 8%, 35%)',
  'just-black': 'hsl(0, 0%, 100%)',
  white: 'hsl(0, 0%, 100%)',

  logan: '#A9ADC1',
  'just-orange': '#ffff',
  'just-pink': '#ffff',
  'light-blue': '#3da9fc',
  'dark-grey': '#2b313b',
  'black-currant': '#fff',
  'soft-black': '#4b4c53',
  'soft-gray': '#a4a4a4',
}

export const darkTheme = {
  'body-color': 'hsl(233, 13%, 14%)',
  'just-white': 'hsl(0, 0%, 100%)',
  'darken-soft-gray': 'hsl(230, 12%, 20%)',
  'davys-gray': 'hsl(230, 16%, 71%)',
  'just-black': 'hsl(0, 0%, 0%)',
  white: 'hsl(0, 0%, 100%)',

  logan: '#a9adc1',
  'just-orange': '#f77062',
  'just-pink': '#fe5196',
  'light-blue': '#3da9fc',
  'dark-grey': '#2b313b',
  'black-currant': '#2f2d39',
  'soft-black': '#4b4c53',
  'soft-gray': '#a4a4a4',
}

export const GlobalStyled = createGlobalStyle`

@font-face {
    font-family: Matter;
    src: url('/assets/fonts/matter/Matter-Bold.otf');
    font-style: normal;
    font-weight: 700;
}

@font-face {
    font-family: Matter;
    src: url('/assets/fonts/matter/Matter-SemiBold.otf');
    font-style: normal;
    font-weight: 600;
}

@font-face {
    font-family: Matter;
    src: url('/assets/fonts/matter/Matter-Medium.otf');
    font-style: normal;
    font-weight: 500;
} 

@font-face {
    font-family: Matter;
    src: url('/assets/fonts/matter/Matter-Regular.otf');
    font-style: normal;
    font-weight: 400;
} 

@font-face {
    font-family: palaquinDark;
    src: url('/assets/fonts/palaquin-dark/PalanquinDark-Bold.ttf');
    font-style: normal;
    font-weight: 700;
} 

 @font-face {
    font-family: lato;
    src: url('/assets/fonts/lato/Lato-Black.ttf');
    font-style: normal;
    font-weight: 900;
} 


@font-face {
    font-family: lato;
    src: url('/assets/fonts/lato/Lato-Bold.ttf');
    font-style: normal;
    font-weight: 700;
}

@font-face {
    font-family: lato;
    src: url('/assets/fonts/lato/Lato-Regular.ttf');
    font-style: normal;
    font-weight: 400;
}

@font-face {
    font-family: palaquinDark;
    src: url('/assets/fonts/palaquin-dark/PalanquinDark-SemiBold.ttf');
    font-style: normal;
    font-weight: 600;
}

@font-face {
    font-family: palaquinDark;
    src: url('/assets/fonts/palaquin-dark/PalanquinDark-Medium.ttf');
    font-style: normal;
    font-weight: 500;
}

@font-face {
    font-family: palaquinDark;
    src: url('/assets/fonts/palaquin-dark/PalanquinDark-Regular.ttf');
    font-style: normal;
    font-weight: 400;
}

:root {
--body1-mobile: 400 1.125rem/normal lato; 
--body2-mobile: 400 1rem/normal lato; 
--body3-mobile: 400 0.75rem/normal lato; 

--heading2-mobile: 700 1.75rem/2.125rem palaquinDark; 
--heading3-mobile: 700 1.375rem/1.5rem palaquinDark; 
--heading1-mobile: 700 2.25rem/2.8125rem palaquinDark; 

--font-menu: 700 18px/20px palaquinDark; 

--body3-regular-tablet: 400 1rem/normal lato; 
--body2-regular-tablet: 400 1rem/normal lato; 
--body1-regular-tablet: 400 1.25rem/normal lato; 

--heading2-tablet: 700 1.875rem/normal palaquinDark; 
--heading3-tablet: 700 1.25rem/normal palaquinDark; 
--heading1-tablet: 700 2.5rem/normal palaquinDark; 

--body1-regular-desktop: 400 1.5rem/normal lato; 
--body2-regular-desktop: 400 1.125rem/normal lato; 
--body3-regular-desktop: 400 1rem/normal lato; 

--heading1-desktop: 700 3rem/3.75rem palaquinDark; 
--heading2-desktop: 700 2.25rem/2.375rem palaquinDark; 
--heading3-desktop: 700 1.5rem/normal palaquinDark; 

--button-regular-desktop: 400 1.125rem/normal lato; 
--button-bold-desktop: 700 1.125rem/normal lato; 

--button-regular-mobile: 400 1.125rem/normal Lato; 
--button-bold-mobile: 700 1.125rem/normal Lato; 
}



html,
body {
  padding: 0;
  margin: 0;
  scroll-behavior: smooth;
}

body {
  background-color: ${({ theme }) => theme['body-color']};
  color: ${({ theme }) => theme.logan};
  font: var(--body1-mobile);
  overflow-x: hidden;
}

  body::-webkit-scrollbar {
    width: 10px;
  }
  body::-webkit-scrollbar-track {
    background-color: hsl(0, 0%, 26%);
  }
  body::-webkit-scrollbar-thumb {
    background-color: hsl(0, 0%, 41%);
    border-radius: 10px;
    height: 3.125rem;
  }

a {
  color: inherit;
  text-decoration: none;
}

* {
  box-sizing: border-box;
}

.wrapper {
  max-width: 1200px;
  margin: auto;
}




  .link-primary {
    justify-content: center;
    text-align: center;
    background: ${({ theme }) => theme['just-white']};
    color: ${({ theme }) => theme['just-black']};
    border: 1px solid transparent;
    transition: box-shadow 0.3s ease;

    i {
      font-size: 1rem;
    }
  }

  .link-primary,
  .link-secondary {
    display: flex;
    gap: 0.5rem;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    padding: 1rem 2.5rem;

    span {
      font-weight: bold;
      font-size: 1rem;
    }
  }

  .link-primary:hover {
    border: 1px solid hsl(0, 0%, 12%);
    box-shadow: 0 0 0 3px hsl(0, 0%, 12%), 0 0 0 5px rgba(255, 255, 255, 0.92);
  }

  .link-secondary {
    border: 3px solid hsl(233, 5%, 31%);
    transition: 0.3s ease;
    color: ${({ theme }) => theme['just-white']};
  }

  .link-secondary:hover {
    border-color: transparent;
  }

@media screen and (min-width: 64rem) {
    body {
        font: var(--body1-regular-desktop);
    }
}

`

export const MainStyled = styled.main`
  padding: 0 1.5rem 0 1.5rem;
`

export const MainProjectsContainer = styled.main`
  h1.heading-h1 {
    position: relative;
    margin: 80px 0 30px 0;
    text-align: left;
    color: ${({ theme }) => theme['just-white']};

    &::before {
      content: '';
      position: absolute;
      width: 200px;
      height: 6px;
      left: 0;
      bottom: -4px;
      border-radius: 4px;
      background: ${({ theme }) => theme['just-white']};
    }
  }

  & > div {
    padding-bottom: 100px;
    position: relative;
  }

  min-height: 100vh;

  footer {
    position: absolute;
    padding: 1.5rem 0;
    bottom: 0;
    left: 0;
    right: 0;
  }
`
