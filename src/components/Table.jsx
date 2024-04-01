import { orderDataState } from "./atom"
import { useRecoilValue } from "recoil"

export const Table = ()=>{
    const orderData = useRecoilValue(orderDataState);
return(
<table className="w-full ">
                {/* <colgroup>
                <col className=' w-1/5'/>
                <col className='w-1/5'/>
                <col className='w-1/5'/>
                <col className='w-1/5'/>
                <col className='w-1/5'/>
                </colgroup> */}
                <thead className=' bg-[#f2f2f2] grey-700'>
                    <tr>
                        <th className='px-3 py-[10px] text-sm font-medium tracking-wider round-l text-left'>Order ID</th>
                        <th className='px-3 py-[10px] text-sm font-medium tracking-wider text-left'>Status</th>
                        <th className='px-3 py-[10px] text-sm font-medium tracking-wider text-left'>Transaction ID</th>
                        <th className='px-3 py-[10px] text-sm font-medium tracking-wider text-left'>Refund Date</th>
                        <th className='px-3 py-[10px] text-sm font-medium tracking-wider round-r text-left'>Order Amount</th>
                    </tr>
                </thead>
                <tbody className="bg-white">
                    {orderData.map((order,index)=>(
                      <tr className='text-sm relative border-b-[1px]  border-[#e6e6e6]' key ={index}>
                      <td className="text-blue-700  font-medium text-[15px] px-3 py-[10px] ">{order.orderId}</td>
                      <td className="flex items-center px-3 py-[10px] text-[#1a181e]  text-[15px] gap-[6px] ">
                          <span className="bg-green-500 w-[10px] h-[10px] rounded-full"></span>
                           {order.status}
                      </td>
                      <td className="text-gray-700 text-[15px] px-3 py-[10px]">{order.transactionId}</td>
                      <td className="text-gray-700 text-[15px] px-3 py-[10px]">{order.RefundDate}</td>
                      <td className="text-gray-700 text-[15px] px-3 pl-20 py-[10px] ">{order.orderAmount}</td>
                  </tr>  
                    ))}
                    {/* <tr className='text-sm relative border-b-[1px]  border-[#e6e6e6]'>
                        <td className="text-blue-700  font-medium text-[15px] px-3 py-[10px] "></td>
                        <td className="flex items-center px-3 py-[10px] text-[#1a181e]  text-[15px] gap-[6px] ">
                            <span className="bg-green-500 w-[10px] h-[10px] rounded-full"></span>
                             Successful
                        </td>
                        <td className="text-gray-700 text-[15px] px-3 py-[10px]"></td>
                        <td className="text-gray-700 text-[15px] px-3 py-[10px]">Today, 8:45 PM</td>
                        <td className="text-gray-700 text-[15px] px-3 pl-20 py-[10px] ">₹1125.00</td>
                    </tr>
                    <tr className='text-sm relative border-b-[1px]  border-[#e6e6e6]'>
                        <td className="text-blue-700  font-medium text-[15px] px-3 py-[10px] ">#281210</td>
                        <td className="flex items-center px-3 py-[10px] text-[#1a181e] text-[15px] gap-[6px] ">
                            <span className="bg-[#999999] w-[10px] h-[10px] rounded-full"></span>
                            Pending </td>
                        <td className="text-gray-700 text-[15px] px-3 py-[10px]">TRX789012</td>
                        <td className="text-gray-700 text-[15px] px-3 py-[10px]">Tomorrow, 10:00 AM</td>
                        <td className="text-gray-700 text-[15px] px-3 pl-20  py-[10px]">₹950.50</td>
                    </tr>
                    <tr className='text-sm relative border-b-[1px]  border-[#e6e6e6]'>
                        <td className="text-blue-700  font-medium text-[15px] px-3 py-[10px] ">#281211</td>
                        <td className="flex items-center px-3 py-[10px] text-[#1a181e] text-[15px] gap-[6px] ">
                            <span className="bg-green-500 w-[10px] h-[10px] rounded-full"></span>
                             Successful</td>
                        <td className="text-gray-700 text-[15px] px-3 py-[10px]">TRX345678</td>
                        <td className="text-gray-700 text-[15px] px-3 py-[10px]">Yesterday, 3:30 PM</td>
                        <td className="text-gray-700 text-[15px] px-3 pl-20 py-[10px]">₹750.00 </td>
                    </tr>
                    <tr className='text-sm relative border-b-[1px]  border-[#e6e6e6]'>
                    <td className="text-blue-700  font-medium text-[15px] px-3 py-[10px] ">#281212</td>
                        <td className="flex items-center px-3 py-[10px] text-[#1a181e] text-[15px] gap-[6px] ">
                            <span className="bg-green-500 w-[10px] h-[10px] rounded-full"></span>
                             Successful</td>
                        <td className="text-gray-700 text-[15px] px-3 py-[10px]">TRX901234</td>
                        <td className="text-gray-700 text-[15px] px-3 py-[10px]">Today, 11:20 AM</td>
                        <td className="text-gray-700 text-[15px] px-3 pl-20 py-[10px]">₹2000.00</td>
                    </tr>
                    <tr className='text-sm relative border-b-[1px]  border-[#e6e6e6]'>
                    <td className="text-blue-700  font-medium text-[15px] px-3 py-[10px] ">#281213</td>
                        <td className="flex items-center px-3 py-[10px] text-[#1a181e] text-[15px] gap-[6px] ">
                            <span className="bg-[#999999] w-[10px] h-[10px] rounded-full"></span>
                             Pending</td>
                        <td className="text-gray-700 text-[15px] px-3 py-[10px]">TRX567890</td>
                        <td className="text-gray-700 text-[15px] px-3 py-[10px]">Tomorrow, 9:00 AM</td>
                        <td className="text-gray-700 text-[15px] pl-20 px-3 py-[10px]">₹1800.00</td>
                    </tr>
                    <tr className='text-sm relative border-b-[1px]  border-[#e6e6e6]'>
                    <td className="text-blue-700  font-medium text-[15px] px-3 py-[10px] ">#281214</td>
                        <td className="flex items-center px-3 py-[10px] text-[#1a181e] text-[15px] gap-[6px] ">
                            <span className="bg-[#999999] w-[10px] h-[10px] rounded-full"></span>
                             Pending</td>
                        <td className="text-gray-700 text-[15px] px-3 py-[10px]">TRX098765</td>
                        <td className="text-gray-700 text-[15px] px-3 py-[10px]">Yesterday, 2:00 PM</td>
                        <td className="text-gray-700 text-[15px] px-3 pl-20 py-[10px]">₹500.00</td>
                    </tr>
                    <tr className='text-sm relative border-b-[1px]  border-[#e6e6e6]'></tr>
                    <td className="text-blue-700  font-medium text-[15px] px-3 py-[10px] ">#281215</td>
                        <td className="flex items-center px-3 py-[10px] text-[#1a181e] text-[15px] gap-[6px] ">
                            <span className="bg-green-500 w-[10px] h-[10px] rounded-full"></span>
                             Successful</td>
                        <td className="text-gray-700 text-[15px] px-3 py-[10px]">TRX456789</td>
                        <td className="text-gray-700 text-[15px] px-3 py-[10px]">Today, 10:30 AM</td>
                        <td className="text-gray-700 text-[15px] px-3 pl-20 py-[10px]">₹3000.00</td>
                    <tr className='text-sm relative border-b-[1px]  border-[#e6e6e6]'>
                    <td className="text-blue-700  font-medium text-[15px] px-3 py-[10px] ">#281216</td>
                        <td className="flex items-center px-3 py-[10px] text-[#1a181e] text-[15px] gap-[6px] ">
                            <span className="bg-[#999999] w-[10px] h-[10px] rounded-full"></span>
                             Pending</td>
                        <td className="text-gray-700 text-[15px] px-3 py-[10px]">TRX987654</td>
                        <td className="text-gray-700 text-[15px] px-3 py-[10px]">Tomorrow, 11:30 AM</td>
                        <td className="text-gray-700 text-[15px] px-3 pl-20 py-[10px]">₹1200.00</td>
                    </tr>
                    <tr className='text-sm relative border-b-[1px]  border-[#e6e6e6]'>
                    <td className="text-blue-700  font-medium text-[15px] px-3 py-[10px] ">#281217</td>
                        <td className="flex items-center px-3 py-[10px] text-[#1a181e] text-[15px] gap-[6px] ">
                            <span className="bg-[#999999] w-[10px] h-[10px] rounded-full"></span>
                             Pending</td>
                        <td className="text-gray-700 text-[15px] px-3 py-[10px]">TRX654321</td>
                        <td className="text-gray-700 text-[15px] px-3 py-[10px]">Yesterday, 4:00 PM</td>
                        <td className="text-gray-700 text-[15px] px-3 pl-20 py-[10px]">₹900.00</td>
                    </tr>
                    <tr className='text-sm relative border-b-[1px]  border-[#e6e6e6]'>
                    <td className="text-blue-700  font-medium text-[15px] px-3 py-[10px] ">#281218</td>
                        <td className="flex items-center px-3 py-[10px] text-[#1a181e] text-[15px] gap-[6px] ">
                            <span className="bg-green-500 w-[10px] h-[10px] rounded-full"></span>
                             Successful</td>
                        <td className="text-gray-700 text-[15px] px-3 py-[10px]">TRX234567</td>
                        <td className="text-gray-700 text-[15px] px-3 py-[10px]">Today, 9:45 AM</td>
                        <td className="text-gray-700 text-[15px] px-3 pl-20 py-[10px]">₹1500.00</td>
                    </tr> */}
                </tbody>
            </table>
);
}