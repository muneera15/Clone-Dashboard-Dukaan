export const Table = ()=>{
return <table className='min-w-full'>
                <colgroup>
                <col className='w-1/5'/>
                <col className='w-1/5'/>
                <col className='w-1/5'/>
                <col className='w-1/5'/>
                <col className='w-1/5'/>
                </colgroup>
                <thead className=' bg-[#f2f2f2] grey-700'>
                    <tr>
                        <th className='px-3 py-[10px] text-sm font-medium tracking-wider round-l text-left'>Order ID</th>
                        <th className='px-3 py-[10px] text-sm font-medium tracking-wider text-left'>Status</th>
                        <th className='px-3 py-[10px] text-sm font-medium tracking-wider text-left'>Transaction ID</th>
                        <th className='px-3 py-[10px] text-sm font-medium tracking-wider text-left'>Refund Date</th>
                        <th className='px-3 py-[10px] text-sm font-medium tracking-wider round-r text-right'>Order Amount</th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-[#e6e6e6]">
                    <tr className='text-sm relative'>
                        <td className="text-blue-700  font-medium text-[15px] px-3 py-[10px] ">#281209</td>
                        <td className="flex items-center px-3 py-[10px] text-[#1a181e] text-[15px] gap-[6px] ">
                            <span className="bg-green-500 w-[10px] h-[10px] rounded-full"></span>
                             Successful
                        </td>
                        <td className="text-gray-700 text-[15px] px-3 py-[10px]"></td>
                        <td className="text-gray-700 text-[15px] px-3 py-[10px]"></td>
                        <td className="text-gray-700 text-[15px] px-3 py-[10px]"></td>
                    </tr>
                    <tr className='text-sm relative'>
                        <td className="text-blue-700  font-medium text-[15px] px-3 py-[10px] "></td>
                        <td className="flex items-center px-3 py-[10px] text-[#1a181e] text-[15px] gap-[6px] ">
                            <span className="bg-[#999999] w-[10px] h-[10px] rounded-full"></span>
                             </td>
                        <td className="text-gray-700 text-[15px] px-3 py-[10px]"></td>
                        <td className="text-gray-700 text-[15px] px-3 py-[10px]"></td>
                        <td className="text-gray-700 text-[15px] px-3 py-[10px]"></td>
                    </tr>
                    <tr className='text-sm relative'>
                        <td className="text-blue-700  font-medium text-[15px] px-3 py-[10px] "></td>
                        <td className="flex items-center px-3 py-[10px] text-[#1a181e] text-[15px] gap-[6px] ">
                            <span className="bg-green-500 w-[10px] h-[10px] rounded-full"></span>
                             Successful</td>
                        <td className="text-gray-700 text-[15px] px-3 py-[10px]"></td>
                        <td className="text-gray-700 text-[15px] px-3 py-[10px]"></td>
                        <td className="text-gray-700 text-[15px] px-3 py-[10px]"></td>
                    </tr>
                    <tr className='text-sm relative'>
                    <td></td>
                        <td className="text-blue-700  font-medium text-[15px] px-3 py-[10px] "></td>
                        <td className="flex items-center px-3 py-[10px] text-[#1a181e] text-[15px] gap-[6px] ">
                            <span className="bg-green-500 w-[10px] h-[10px] rounded-full"></span>
                             Successful</td>
                        <td className="text-gray-700 text-[15px] px-3 py-[10px]"></td>
                        <td className="text-gray-700 text-[15px] px-3 py-[10px]"></td>
                    </tr>
                    <tr className='text-sm relative'>
                    <td className="text-blue-700  font-medium text-[15px] px-3 py-[10px] "></td>
                        <td className="flex items-center px-3 py-[10px] text-[#1a181e] text-[15px] gap-[6px] ">
                            <span className="bg-[#999999] w-[10px] h-[10px] rounded-full"></span>
                             Pending</td>
                        <td className="text-gray-700 text-[15px] px-3 py-[10px]"></td>
                        <td className="text-gray-700 text-[15px] px-3 py-[10px]"></td>
                        <td className="text-gray-700 text-[15px] px-3 py-[10px]"></td>
                    </tr>
                    <tr className='text-sm relative'>
                    <td className="text-blue-700  font-medium text-[15px] px-3 py-[10px] "></td>
                        <td className="flex items-center px-3 py-[10px] text-[#1a181e] text-[15px] gap-[6px] ">
                            <span className="bg-[#999999] w-[10px] h-[10px] rounded-full"></span>
                             Pending</td>
                        <td className="text-gray-700 text-[15px] px-3 py-[10px]"></td>
                        <td className="text-gray-700 text-[15px] px-3 py-[10px]"></td>
                        <td className="text-gray-700 text-[15px] px-3 py-[10px]"></td>
                    </tr>
                    <tr className='text-sm relative'></tr>
                    <td className="text-blue-700  font-medium text-[15px] px-3 py-[10px] "></td>
                        <td className="flex items-center px-3 py-[10px] text-[#1a181e] text-[15px] gap-[6px] ">
                            <span className="bg-green-500 w-[10px] h-[10px] rounded-full"></span>
                             Successful</td>
                        <td className="text-gray-700 text-[15px] px-3 py-[10px]"></td>
                        <td className="text-gray-700 text-[15px] px-3 py-[10px]"></td>
                        <td className="text-gray-700 text-[15px] px-3 py-[10px]"></td>
                    <tr className='text-sm relative'>
                    <td className="text-blue-700  font-medium text-[15px] px-3 py-[10px] "></td>
                        <td className="flex items-center px-3 py-[10px] text-[#1a181e] text-[15px] gap-[6px] ">
                            <span className="bg-[#999999] w-[10px] h-[10px] rounded-full"></span>
                             Pending</td>
                        <td className="text-gray-700 text-[15px] px-3 py-[10px]"></td>
                        <td className="text-gray-700 text-[15px] px-3 py-[10px]"></td>
                        <td className="text-gray-700 text-[15px] px-3 py-[10px]"></td>
                    </tr>
                    <tr className='text-sm relative'>
                    <td className="text-blue-700  font-medium text-[15px] px-3 py-[10px] "></td>
                        <td className="flex items-center px-3 py-[10px] text-[#1a181e] text-[15px] gap-[6px] ">
                            <span className="bg-[#999999] w-[10px] h-[10px] rounded-full"></span>
                             Pending</td>
                        <td className="text-gray-700 text-[15px] px-3 py-[10px]"></td>
                        <td className="text-gray-700 text-[15px] px-3 py-[10px]"></td>
                        <td className="text-gray-700 text-[15px] px-3 py-[10px]"></td>
                    </tr>
                    <tr className='text-sm relative'>
                    <td className="text-blue-700  font-medium text-[15px] px-3 py-[10px] "></td>
                        <td className="flex items-center px-3 py-[10px] text-[#1a181e] text-[15px] gap-[6px] ">
                            <span className="bg-green-500 w-[10px] h-[10px] rounded-full"></span>
                             Successful</td>
                        <td className="text-gray-700 text-[15px] px-3 py-[10px]"></td>
                        <td className="text-gray-700 text-[15px] px-3 py-[10px]"></td>
                        <td className="text-gray-700 text-[15px] px-3 py-[10px]"></td>
                    </tr>
                </tbody>
            </table>
}