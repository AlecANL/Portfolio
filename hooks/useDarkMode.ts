import React from 'react'

import { ETheme } from '@models/general.enum'
import { TTheme } from '@models/hooks.interface'

export function useDarkMode() {
  const [theme, setTheme] = React.useState<TTheme>(ETheme.DARK)

  function setMode(mode: TTheme) {
    localStorage.setItem('theme', mode)
    setTheme(mode)
  }

  function toggleTheme() {
    theme === ETheme.LIGHT ? setMode(ETheme.DARK) : setMode(ETheme.LIGHT)
  }

  React.useEffect(() => {
    const currentTheme = localStorage.getItem('theme') as TTheme
    currentTheme ? setTheme(currentTheme) : setMode(ETheme.DARK)
  }, [])

  return {
    toggleTheme,
    theme,
  }
}
