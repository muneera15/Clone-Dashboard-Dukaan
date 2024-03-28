export const RevenueCard3 = ({
    title,
    amount
})=>{
    return <div className="bg-white rounded-[8px] shadow-md p-5 min-w-[300px] bg-">
        <div className=" flex justify-center text-gray-700 flex-col">
            <div className="flex gap-3">
            <div>{title}</div>
            <div className=" flex justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
                </svg>
                </div>
                </div>
                </div>
                <div className="flex justify-between items-center pt-2">
                    <div className="flex item-center text-3xl font-medium">
                        ₹ {amount}
                        </div>
                        </div>
                        </div>
                        }
                                        