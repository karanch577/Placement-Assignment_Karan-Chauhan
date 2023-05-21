import React from 'react'
import { useContext } from 'react'
import ToggleBtn from '../components/ToggleBtn'
import ThemeContext from '../context/theme/ThemeContext'

function Dashboard() {
  const {isDarkMode} = useContext(ThemeContext)
  return (
    <div>
        <h3 className={`${isDarkMode ? "text-light": ""}`} style={{margin: "1em", fontSize: "1.5rem"}}>Dashboard</h3>
        <ToggleBtn />
    </div>
  )
}

export default Dashboard