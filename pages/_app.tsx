import { createContext } from 'react'
import Header from '../components/header/header'
import '../styles/globals.css'
import { useRouter } from 'next/router'

export const AppContext = createContext(null)

function MyApp({ Component, pageProps }) {
  const router = useRouter()

  const value = {
    language: router.locale,
  }

  return (
    <>
      <AppContext.Provider value={value}>
        <Header />
        <Component {...pageProps} />
      </AppContext.Provider>
    </>
  )
}

export default MyApp
