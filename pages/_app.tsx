import { createContext } from 'react'
import '../public/assets/fonts/icons/icons.css'

import Header from '../components/layout/header/header'

import { useRouter } from 'next/router'
import { useDarkMode } from '@hooks/useDarkMode'

import { lightTheme, darkTheme, GlobalStyled } from '../styles/globals'

import { ETheme } from '../models/general.enum'
import { ThemeProvider } from 'styled-components'

export const AppContext = createContext(null)

function MyApp({ Component, pageProps }) {
  const router = useRouter()
  const { theme, toggleTheme } = useDarkMode()
  const currentTheme = theme === ETheme.LIGHT ? lightTheme : darkTheme

  const value = {
    language: router.locale,
    toggleTheme,
    theme,
  }

  return (
    <>
      <AppContext.Provider value={value}>
        <ThemeProvider theme={currentTheme}>
          <GlobalStyled />
          <Header />
          <Component {...pageProps} />
        </ThemeProvider>
      </AppContext.Provider>
    </>
  )
}

export default MyApp
