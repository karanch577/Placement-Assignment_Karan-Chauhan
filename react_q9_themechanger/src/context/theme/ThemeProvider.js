import React from 'react'
import { useState } from 'react'
import ThemeContext from './ThemeContext'

function ThemeProvider(props) {
    const [isDarkMode, setIsDarkMode] = useState(false)
  return (
    <ThemeContext.Provider value={{isDarkMode, setIsDarkMode}}>
        {props.children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider