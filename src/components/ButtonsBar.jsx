export const ButtonsBar=()=>{
return <nav className="bg-[#1e2640] top-0 z-0 left-0 flex flex-col justify-between opacity-0 lg:max-w-[224px] lg:opacity-[100] items-center h-[100dvh] w-full fixed lg:sticky">
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
<div className="flex flex-col gap-[4px] cursor-pointer w-[208px] ">
<article className="flex items-center gap-[12px] px-[16px] py-[8px] rounded-[4px] hover:bg-white/10 hover:cursor-pointer-group">
         <svg xmlns="http://www.w3.org/2000/svg" className="flex justify-center items-center" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
</svg>   
        <p className="text-[14px] leading-[20px] font-[500] text-white opacity-80 group-hover:opacity-100">Home</p>
    </article>

    <article className="flex items-center gap-[12px] px-[16px] py-[8px] rounded-[4px] hover:bg-white/10 hover:cursor-pointer-group">

    <svg className="flex justify-center items-center"xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z" />
</svg>

        <p className="text-[14px] leading-[20px] font-[500] text-white opacity-80 group-hover:opacity-100">Orders</p>
    </article>

    <article className="flex items-center gap-[12px] px-[16px] py-[8px] rounded-[4px] hover:bg-white/10 hover:cursor-pointer-group">
    <svg xmlns="http://www.w3.org/2000/svg" className="flex justify-center items-center"fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z" />
</svg>

        <p className="text-[14px] leading-[20px] font-[500] text-white opacity-80 group-hover:opacity-100">Products</p>
    </article>

    <article className="flex items-center gap-[12px] px-[16px] py-[8px] rounded-[4px] hover:bg-white/10 hover:cursor-pointer-group">
    <svg xmlns="http://www.w3.org/2000/svg" className="flex justify-center items-center"fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
</svg>

        <p className="text-[14px] leading-[20px] font-[500] text-white opacity-80 group-hover:opacity-100">Delivery</p>
    </article>

    <article className="flex items-center gap-[12px] px-[16px] py-[8px] rounded-[4px] hover:bg-white/10 hover:cursor-pointer-group">
    <svg xmlns="http://www.w3.org/2000/svg" className="flex justify-center items-center"fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M19.114 5.636a9 9 0 0 1 0 12.728M16.463 8.288a5.25 5.25 0 0 1 0 7.424M6.75 8.25l4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z" />
</svg>

        <p className="text-[14px] leading-[20px] font-[500] text-white opacity-80 group-hover:opacity-100">Marketing</p>
    </article>

    <article className="flex items-center gap-[12px] px-[16px] py-[8px] rounded-[4px] hover:bg-white/10 hover:cursor-pointer-group">
    <svg xmlns="http://www.w3.org/2000/svg" className="flex justify-center items-center"fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
</svg>

        <p className="text-[14px] leading-[20px] font-[500] text-white opacity-80 group-hover:opacity-100">Analytics</p>
    </article>


    <article className="flex items-center gap-[12px] px-[16px] py-[8px] rounded-[4px] bg-white/10 hover:cursor-pointer-group">
    <svg xmlns="http://www.w3.org/2000/svg" className="flex justify-center items-center"fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" />
</svg>

        <p className="text-[14px] leading-[20px] font-[500] text-white opacity-80 group-hover:opacity-100">Payouts</p>
    </article>

    <article className="flex items-center gap-[12px] px-[16px] py-[8px] rounded-[4px] hover:bg-white/10 hover:cursor-pointer-group">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m9 14.25 6-6m4.5-3.493V21.75l-3.75-1.5-3.75 1.5-3.75-1.5-3.75 1.5V4.757c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0c1.1.128 1.907 1.077 1.907 2.185ZM9.75 9h.008v.008H9.75V9Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm4.125 4.5h.008v.008h-.008V13.5Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
</svg>

        <p className="text-[14px] leading-[20px] font-[500] text-white opacity-80 group-hover:opacity-100">Discounts</p>
    </article>

    <article className="flex items-center gap-[12px] px-[16px] py-[8px] rounded-[4px] hover:bg-white/10 hover:cursor-pointer-group">
    <svg xmlns="http://www.w3.org/2000/svg" className="flex justify-center items-center"fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
</svg>

        <p className="text-[14px] leading-[20px] font-[500] text-white opacity-80 group-hover:opacity-100">Audience</p>
    </article>

    <article className="flex items-center gap-[12px] px-[16px] py-[8px] rounded-[4px] hover:bg-white/10 hover:cursor-pointer-group">
    <svg xmlns="http://www.w3.org/2000/svg"className="flex justify-center items-center" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
  <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
</svg>

        <p className="text-[14px] leading-[20px] font-[500] text-white opacity-80 group-hover:opacity-100">Appearance</p>
    </article>

    <article className="flex items-center gap-[12px] px-[16px] py-[8px] rounded-[4px] hover:bg-white/10 hover:cursor-pointer-group">
    <svg xmlns="http://www.w3.org/2000/svg" className="flex justify-center items-center"fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
</svg>

        <p className="text-[14px] leading-[20px] font-[500] text-white opacity-80 group-hover:opacity-100">Plugins</p>
    </article>
</div>
    </div>
<div className="bg-[#353c53] rounded-[4px] px-[12px] py-[8px]  w-[192px] flex gap-[12px] items-center relative bottom-[16px]">
<span className="  p-[6px] bg-[#ffffff1A] rounded-[4px] ">
     <svg className="h-[25px] w-[25px]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M21 12a2.25 2.25 0 0 0-2.25-2.25H15a3 3 0 1 1-6 0H5.25A2.25 2.25 0 0 0 3 12m18 0v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 9m18 0V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v3" />
</svg>
</span>
<span className="flex flex-col gap-[2px]">
    <p className="leading-[16px] text-[13px] text-white">Available Credits</p>
    <p className="leading-[24px] text-[16px] text-[white]">222.10</p>
</span>
</div>
</nav>

}
