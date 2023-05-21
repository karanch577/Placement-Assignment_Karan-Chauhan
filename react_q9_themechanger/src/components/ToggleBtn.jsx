import React, { useContext } from 'react'
import './ToggleBtn.css'
import ThemeContext from '../context/theme/ThemeContext'

function ToggleBtn() {
    const { isDarkMode, setIsDarkMode } = useContext(ThemeContext)

    function handleTheme(e) {
      console.log(e.target.id)
        document.body.className = e.target.id
        setIsDarkMode(prev => e.target.id === "light" ? false : true
        )
    }
  return (
    <>
    <div>
        <div className="icon">
        <i onClick={handleTheme} id='light' className={`ri-sun-line ${isDarkMode && " text-light"}`}></i>
        <i onClick={handleTheme} id='dark' className="ri-moon-clear-fill"></i>
        </div>
    </div>
    </>
  )
}

export default ToggleBtn