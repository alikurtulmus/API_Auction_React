import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// https://localhost:7051/api/PaymentHistory/CheckStatus


const paymentHistoryApi = createApi({
    reducerPath:"paymentHistoryApi",
    baseQuery:fetchBaseQuery({
        baseUrl:"https://localhost:7051/api/PaymentHistory/",
    }),
    endpoints:(builder) => ({
        checkStatusAuctionPrice:builder.mutation({
            query:(statusDetail)=> ({
                url:"CheckStatus",
                method:"POST",
                body:statusDetail
            })
        }),
        createPaymentHistory:builder.mutation({
            query:(paymentHistory) => ({
                url:"AddHistory",
                method:"POST",
                body:paymentHistory
            })
        })
    })
})

export const {useCheckStatusAuctionPriceMutation,useCreatePaymentHistoryMutation} = paymentHistoryApi;
export default paymentHistoryApi