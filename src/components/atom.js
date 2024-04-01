import { atom } from "recoil";

export const orderDataState = atom({
    key : "orderDataState",
    default : [{
        orderId : "#281209",
        status : "Successfull",
        transactionId : "TRX123456",
        RefundDate : "Today, 8:45 PM",
        orderAmount : "₹1125.00"
    },
    {
        orderId : "#281210",
        status : "Pending",
        transactionId : "TRX789012",
        RefundDate : " Tomorrow, 10:00 AM",
        orderAmount : "₹950.50"

    },{
        orderId : "#281211",
        status : "Successfull",
        transactionId : "TRX345678",
        RefundDate : "Yesterday, 3:30 PM",
        orderAmount : "₹750.00"
    },{
        orderId : "#281212",
        status : "Successfull",
        transactionId : "TRX901234",
        RefundDate : "Today, 11:20 AM",
        orderAmount : "₹2000.00"
    },{
        orderId : "#281213",
        status : "Pending",
        transactionId : "TRX567890",
        RefundDate : "Tomorrow, 9:00 AM",
        orderAmount : "₹1800.00"
    },{
        orderId : "#281214",
        status : "Pending",
        transactionId : "TRX098765",
        RefundDate : "Yesterday, 2:00 PM",
        orderAmount : "₹500.00"
    },{
        orderId : "#281215",
        status : "Successfull",
        transactionId : "TRX456789",
        RefundDate : "Today, 10:30 AM",
        orderAmount : "₹3000.00"
    },{
        orderId : "#281216",
        status : "Pending",
        transactionId : "TRX987654",
        RefundDate : "Tomorrow, 11:30 AM",
        orderAmount : "₹1200.00"
    },{
        orderId : "#281217",
        status : "Pending",
        transactionId : "TRX654321",
        RefundDate : "Yesterday, 4:00 PM",
        orderAmount : "₹900.00"
    },{
        orderId : "#281218",
        status : "Successfull",
        transactionId : "TRX234567",
        RefundDate : "Today, 9:45 AM",
        orderAmount : "₹1500.00"
    },

    ],
})