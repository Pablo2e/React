import React from 'react'
import ThemeProvider from './context/ThemeProvider'
import Navbar from './components/Navbar'
import Principal from './components/Principal'
import HolaProvider from './context/HolaProvider'

const App = () => {
  return (
    <HolaProvider>
      <ThemeProvider>
        <Navbar />
        <Principal />
      </ThemeProvider>
    </HolaProvider>
  )
}

export default App