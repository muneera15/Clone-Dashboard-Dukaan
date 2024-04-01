import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {RevenueCard1} from "./components/RevenueCard1.jsx"
import { RevenueCard2 } from "./components/RevenueCard2.jsx"
import { RevenueCard3 } from './components/RevenueCard3.jsx'
import { ButtonsBar } from './components/ButtonsBar.jsx'
import { Header } from './components/Header.jsx'
import { Main } from './components/Main.jsx'

function App() {

  return (
    <div className='flex bg-background '>
      <Main/>
    </div>
  )
}

export default App
