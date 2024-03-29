import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {RevenueCard1} from "./components/RevenueCard1.jsx"
import { RevenueCard2 } from "./components/RevenueCard2.jsx"
import { RevenueCard3 } from './components/RevenueCard3.jsx'
import { ButtonsBar } from './components/ButtonsBar.jsx'
import { Header } from './components/Header.jsx'

function App() {

  return (
    // <div className='grid grid-cols-4 gap-5'>
    //   <RevenueCard1 title={"Next Payout"} amount={"2,312.23"} orderCount={23} date={"Next Payment Date"} time={"Today, 4:00PM"}/>
    // <RevenueCard2 title={"Amount Pending"} amount={"92,312.20"} orderCount={13}/>
    // <RevenueCard3 title={"Amount Pending"} amount={"23,92,312.19"}/>
    // </div>
    <div>
      {/* <ButtonsBar/> */}
      <Header/>
    </div>
  )
}

export default App
