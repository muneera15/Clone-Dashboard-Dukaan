export const ButtonsBar=()=>{
return <nav className="bg-[#1e2640] w-[224px] flex flex-col justify-between items-center h-screen">
    <div className="flex flex-col gap-[24px] items-center relative top-[16px]">
        <div className="flex w-[192px] gap-[12px] items-center justify-center">
            <div>
                <img className="w-[40px] h-[40px] rounded-md" src="https://dukaan.b-cdn.net/300x300/webp/5179822/17f41e92-75fb-4c49-b68c-0c3c7cdc9c9d/1634643435224-7c36895b-b0d0-4599-9ee3-65cf84143d3b.jpeg"/>
            </div>
            <div className="flex flex-col text-white w-[108px] gap-1">
                <p className="text-[16px] bold leading-[22px]">Nishyan</p>
                <a className="text-[13px] leading-[16px] text-white/60 underline" href="/">Visit Store</a>
            </div>
            <div className="w-[20px] h-[20px] text-white">
            <svg stroke ="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg">
               <path d="M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"></path>
                </svg>
            </div>
        </div>
<div className="flex flex-col gap-[4px] w-[208px] ">
<article className="flex items-center gap-[12px] px-[16px] py-[8px] rounded-[4px] hover:bg-white/10 hover:cursor-pointer group">
         <svg xmlns="http://www.w3.org/2000/svg" className="flex justify-center items-center" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
</svg>   
        <p className="text-[14px] leading-[20px] font-[500] text-white opacity-80 group-hover:opacity-100">Home</p>
    </article>

    <article className="flex items-center gap-[12px] px-[16px] py-[8px] rounded-[4px] hover:bg-white/10 hover:cursor-pointer group">

    <svg className="flex justify-center items-center"xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z" />
</svg>

        <p className="text-[14px] leading-[20px] font-[500] text-white opacity-80 group-hover:opacity-100">Orders</p>
    </article>

    <article className="flex items-center gap-[12px] px-[16px] py-[8px] rounded-[4px] hover:bg-white/10 hover:cursor-pointer group">
         <svg xmlns="http://www.w3.org/2000/svg" className="flex justify-center items-center" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
</svg>   
        <p className="text-[14px] leading-[20px] font-[500] text-white opacity-80 group-hover:opacity-100">Products</p>
    </article>

    <article className="flex items-center gap-[12px] px-[16px] py-[8px] rounded-[4px] hover:bg-white/10 hover:cursor-pointer group">
         <svg xmlns="http://www.w3.org/2000/svg" className="flex justify-center items-center" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
</svg>   
        <p className="text-[14px] leading-[20px] font-[500] text-white opacity-80 group-hover:opacity-100">Delivery</p>
    </article>

    <article className="flex items-center gap-[12px] px-[16px] py-[8px] rounded-[4px] hover:bg-white/10 hover:cursor-pointer group">
         <svg xmlns="http://www.w3.org/2000/svg" className="flex justify-center items-center" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
</svg>   
        <p className="text-[14px] leading-[20px] font-[500] text-white opacity-80 group-hover:opacity-100">Marketing</p>
    </article>

    <article className="flex items-center gap-[12px] px-[16px] py-[8px] rounded-[4px] hover:bg-white/10 hover:cursor-pointer group">
         <svg xmlns="http://www.w3.org/2000/svg" className="flex justify-center items-center" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
</svg>   
        <p className="text-[14px] leading-[20px] font-[500] text-white opacity-80 group-hover:opacity-100">Analytics</p>
    </article>


    <article className="flex items-center gap-[12px] px-[16px] py-[8px] rounded-[4px] bg-white/10 hover:cursor-pointer group">
         <svg xmlns="http://www.w3.org/2000/svg" className="flex justify-center items-center" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
</svg>   
        <p className="text-[14px] leading-[20px] font-[500] text-white opacity-80 group-hover:opacity-100">Payouts</p>
    </article>

    <article className="flex items-center gap-[12px] px-[16px] py-[8px] rounded-[4px] hover:bg-white/10 hover:cursor-pointer group">
         <svg xmlns="http://www.w3.org/2000/svg" className="flex justify-center items-center" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
</svg>   
        <p className="text-[14px] leading-[20px] font-[500] text-white opacity-80 group-hover:opacity-100">Discounts</p>
    </article>

    <article className="flex items-center gap-[12px] px-[16px] py-[8px] rounded-[4px] hover:bg-white/10 hover:cursor-pointer group">
         <svg xmlns="http://www.w3.org/2000/svg" className="flex justify-center items-center" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
</svg>   
        <p className="text-[14px] leading-[20px] font-[500] text-white opacity-80 group-hover:opacity-100">Audience</p>
    </article>

    <article className="flex items-center gap-[12px] px-[16px] py-[8px] rounded-[4px] hover:bg-white/10 hover:cursor-pointer group">
         <svg xmlns="http://www.w3.org/2000/svg" className="flex justify-center items-center" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
</svg>   
        <p className="text-[14px] leading-[20px] font-[500] text-white opacity-80 group-hover:opacity-100">Appearance</p>
    </article>

    <article className="flex items-center gap-[12px] px-[16px] py-[8px] rounded-[4px] hover:bg-white/10 hover:cursor-pointer group">
         <svg xmlns="http://www.w3.org/2000/svg" className="flex justify-center items-center" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
</svg>   
        <p className="text-[14px] leading-[20px] font-[500] text-white opacity-80 group-hover:opacity-100">Plugins</p>
    </article>
</div>
    </div>
<div className="bg-[#353c53] rounded-[4px] px-[12px] py-[8px] py-[6px] w-[192px] flex gap-[12px] items-center relative bottom-[16px]">
<span className="  p-[6px] bg-[#ffffff1A] rounded-[4px]">
    <img className="color-[#fff] h-[19.7px] w-[23.65px]" src="https://uxwing.com/wp-content/themes/uxwing/download/banking-finance/wallet-icon.png"/>
</span>
<span className="flex flex-col gap-[2px]">
    <p className="leading-[16px] text-[13px] text-white">Available Credits</p>
    <p className="leading-[24px] text-[16px] text-[white]">222.10</p>
</span>
</div>
</nav>

}