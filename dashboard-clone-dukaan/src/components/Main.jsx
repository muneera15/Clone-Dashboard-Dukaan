import { RevenueCard1 } from './RevenueCard1'
import { RevenueCard2 } from './RevenueCard2'
import { RevenueCard3 } from './RevenueCard3'
import { Header } from './Header'
import { ButtonsBar } from './ButtonsBar'
export const Main = ()=>{
    return <div className='flex'>
        <ButtonsBar/>
        <div className='w-full'>
        <Header/>
        <div className= "p-3 sm:p-8 w-full gap-8 flex flex-col">
        <section className='flex flex-col gap-6'>
            <div className='flex justify-between items-center'>
                <h5 className='font-medium text-xl'>Overview</h5>
                <button className='rounded px-[14px] gap-3 border py-[6px] text-[#4d4d4d] bg-white flex items-center'>This Month
                <svg stroke ="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
               <path d="M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"></path>
                </svg>
                </button>
            </div>
            <div className='flex flex-wrap gap-5'>
      <RevenueCard1 title={"Next Payout"} amount={"2,312.23"} orderCount={23} date={"Next Payment Date"} time={"Today, 4:00PM"}/>
    <RevenueCard2 title={"Amount Pending"} amount={"92,312.20"} orderCount={13}/>
    <RevenueCard3 title={"Amount Pending"} amount={"23,92,312.19"}/>
     </div>
        </section>
    </div>
</div>
</div>
}