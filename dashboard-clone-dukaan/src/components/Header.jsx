export const Header = () =>{
    return <div className="flex justify-between sm:px-8 px-4  py-3 w-[calc(100vw-224px) sm:gap-4 gap-2 h-[64px] items-center border-b border-[#d9d9d9] sticky top-0 bg-[#ffffff]]">
    <div className="flex gap-2 sm:gap-4 items-center sm:flex-grow">
        <h2 className="text-xl text-[#1a181e] font-medium ">Payouts</h2>
    <span className="flex items-center text-[#4d4d4d] gap-[6px]">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-[14px] h-[14px]">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
                </svg>
<p className="text-xs sm:block">How it works</p>
    </span>
</div>
<div className="flex items-center gap-2 px-[4px] py-[1.5px] sm:py-[9px] w-[140px] bg-[#f2f2f2] text-[#808080] rounded sm:flex-grow ">
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="grey" class="w-4 h-4">
  <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
</svg>
<input type="text" placeholder="Search features, tutorials, etc." className="bg-transparent outline-none w-full "/>
</div>
<div className="flex gap-2 justify-end sm:flex-grow">
    <span className="text-[#4d4d4d] bg-[#e6e6e6] rounded-full p-2 sm:w-10 sm:h-10 flex items-center justify-center cursor-pointer">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-[20px] h-[20px] ">
  <path fill-rule="evenodd" d="M12 2.25c-2.429 0-4.817.178-7.152.521C2.87 3.061 1.5 4.795 1.5 6.741v6.018c0 1.946 1.37 3.68 3.348 3.97.877.129 1.761.234 2.652.316V21a.75.75 0 0 0 1.28.53l4.184-4.183a.39.39 0 0 1 .266-.112c2.006-.05 3.982-.22 5.922-.506 1.978-.29 3.348-2.023 3.348-3.97V6.741c0-1.947-1.37-3.68-3.348-3.97A49.145 49.145 0 0 0 12 2.25ZM8.25 8.625a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25Zm2.625 1.125a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Zm4.875-1.125a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25Z" clip-rule="evenodd" />
</svg>
</span>
<span className="text-[#4d4d4d] bg-[#e6e6e6] rounded-full p-2 sm:h-10 sm:w-10 flex items-center justify-center cursor-pointer">
 <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 320 512" class="text-2xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
 <path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"></path>
 </svg>
</span>
</div>
</div>
}