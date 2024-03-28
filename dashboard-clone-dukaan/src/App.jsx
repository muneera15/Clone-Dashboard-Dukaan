import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {RevenueCard} from "./components/RevenueCard.jsx"
import { RevenueCard1 } from "./components/RevenueCard1.jsx"

function App() {

  return (
    <div className='grid grid-cols-4'>
    <RevenueCard title={"Amount Pending"} amount={"92,312.20"} orderCount={13}/>
    <RevenueCard1 className="col-span-5"title={"Amount Pending"} amount={"92,312.20"} orderCount={13}/>
    </div>
  )
}

export default App
