import { orderDataState } from "./atom"
import { useRecoilValue } from "recoil"

export const Table = ()=>{
    const orderData = useRecoilValue(orderDataState);
return(
<table className="w-full ">
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
                        {order.status === "Successfull" ? (<span className="bg-green-500 w-[10px] h-[10px] rounded-full"></span>) : (<span className="bg-[#999999] w-[10px] h-[10px] rounded-full"></span>)}
                           {order.status}
                      </td>
                      <td className="text-gray-700 text-[15px] px-3 py-[10px]">{order.transactionId}</td>
                      <td className="text-gray-700 text-[15px] px-3 py-[10px]">{order.RefundDate}</td>
                      <td className="text-gray-700 text-[15px] px-3 py-[10px] ">{order.orderAmount}</td>
                  </tr>  
                    ))}
                </tbody>
            </table>
);
}
