import { RevenueCard1 } from './RevenueCard1'
import { RevenueCard2 } from './RevenueCard2'
import { RevenueCard3 } from './RevenueCard3'
import { Header } from './Header'
import { ButtonsBar } from './ButtonsBar'
import { Table } from './Table'
export const Main = ()=>{
    return <div className='flex'>
        <ButtonsBar/>
        <div className='w-full'>
        <Header/>
        <div className= "p-3 sm:p-8 w-full gap-8 flex flex-col">
        <section className='flex flex-col gap-6'>
            <div className='flex justify-between items-center'>
                <h5 className='font-medium text-xl'>Overview</h5>
                <button className='rounded px-[14px] gap-3 border py-[6px] text-gray-700 bg-white flex items-center'>This Month
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
        <section className='flex flex-col gap-6'>
            <div className='flex flex-col gap-6'>
                <h5 className='text-xl font-medium text-[#1a181e]'>Transactions | This Month</h5>
                <div className='flex gap-3'>
                    <button className='rounded-full text-[#808080] bg-[#e6e6e6] w-[128px] h-[36px]'>Payouts (22)</button>
                    <button className='rounded-full text-[#ffffff] bg-blue-700 w-[128px] h-[36px]'>Refunds (6)</button>
                </div>
                <div className='flex flex-col item-center gap-3 px-3 pt-3 pb-2 rounded-[8px] bg-white'>
                    <div className='flex justify-between'>
                    <div className='flex items-center gap-2 pl-[15px] px-[4px] w-[300px] py-[6px] border border-[#d9d9d9] text-[#808080] rounded '>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="grey" className="w-[16.35px] h-[18px] ">
                <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
             </svg>
           <input type='text' className="w-[240px]"placeholder='Order ID or Transactions ID' />
           </div>
           <div className='flex items-center gap-3'>
            <button  className='rounded  border p-2 border-[#d9d9d9] gap-[6px] text-gray-700 flex items-center'>Sort
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3 7.5 7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5" />
</svg>
</button>
            <button className='rounded  border p-2 border-[#d9d9d9]  text-gray-700  flex items-center'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
</svg>
            </button>
           </div>
           </div>
           <div>
            <Table/>
           </div>
                </div>
            </div>
        </section>
    </div>
</div>
</div>
}