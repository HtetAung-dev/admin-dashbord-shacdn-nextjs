"use client";

import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { useState } from "react";

// Register necessary classes
ChartJS.register(ArcElement, Tooltip, Legend);

export default function FeaturesPie({ transactions }: any) {
    const [transactionList] = useState(transactions)

    // current month in en-US long format
    const currentMonth = new Date().toLocaleString('en-US', { month: 'long'})

    const [data] = useState({
        labels: ["Webtoon", "Documentary", "Podcasts", "Entertainment", "Education"],
        datasets: [
            {
                label: "Purchases",
                data: [12, 19, 3, 5, 2],
                backgroundColor: [
                    "rgba(19, 92, 209, 0.6)",
                    "rgba(144, 90, 219, 0.6)",
                    "rgba(94, 245, 44, 0.6)",
                    "rgba(5, 245, 225, 0.6)",
                    "rgba(245, 233, 5, 0.6)",
                ],
                
                borderWidth: 1,
            },
        ],
    });


    return (
        <div className='card w-[400px] shadow-2xl rounded-lg bg-stone-100 p-2 hover:bg-sky-100 hover:text-slate-800 cursor-pointer transform transition-transform duration-300 hover:scale-105'>
            <h3 className='text-center text-lg my-3 font-bold font-geist'>Total purchases per feature for {currentMonth} </h3>
            <Pie data={data} />
        </div>
    )
}