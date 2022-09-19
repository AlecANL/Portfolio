import { createGlobalStyle } from 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    'body-color': string
    'just-white': string
    logan: string
    'just-orange': string
    'just-pink': string
  }
}

export const lightTheme = {
  'body-color': '#201D28',
  'just-white': '#fff',
  logan: '#A9ADC1',
  'just-orange': '#F77062',
  'just-pink': '#FE5196',
}

export const darkTheme = {
  'body-color': '#201D28',
  'just-white': '#fff',
  logan: '#A9ADC1',
  'just-orange': '#F77062',
  'just-pink': '#FE5196',
}

export const GlobalStyled = createGlobalStyle`

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
--body1-mobile: 400 1.125rem/normal Lato; 
--body2-mobile: 400 1rem/normal Lato; 
--body3-mobile: 400 0.75rem/normal Lato; 

--body3-regular-tablet: 400 1rem/normal Lato; 
--body2-regular-tablet: 400 1rem/normal Lato; 
--body1-regular-tablet: 400 1.25rem/normal Lato; 

--body1-regular-desktop: 400 1.5rem/normal Lato; 
--body2-regular-desktop: 400 1.125rem/normal Lato; 
--body3-regular-desktop: 400 1rem/normal Lato; 
}



html,
body {
  padding: 0;
  margin: 0;
  background-color: ${({ theme }) => theme['body-color']};
  color: ${({ theme }) => theme.logan};
  font: var(--body1-mobile);
  scroll-behavior: smooth;
}

a {
  color: inherit;
  text-decoration: none;
}

* {
  box-sizing: border-box;
}

.wrapper {
  max-inline-size: 1200px;
  margin: auto;
}

@media screen and (min-width: 64rem) {
    body {
        font: var(--body1-regular-desktop);
    }
}

`
