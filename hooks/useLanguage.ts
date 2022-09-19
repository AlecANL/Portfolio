import { useContext } from 'react'
import { AppContext } from '../pages/_app'

interface ITranslateFile {
  [key: string]: string
}

export function useLanguage(en: ITranslateFile, es: ITranslateFile) {
  const { language } = useContext(AppContext)

  const translation = language === 'en-US' ? en : es

  return {
    language,
    currentLanguage: translation,
  }
}
