"use client";

import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { useState } from "react";

// Register necessary classes
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export default function PaymentReport({ transactions} : any) {
    const [transactionList] = useState(transactions)

    const [data] = useState({
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        datasets: [
            {
                label: 'Total sales',
                data: transactions,
                fill: false,
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
            },
        ],
    });

    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: false,
            },
            title: {
                display: false,
                text: 'Monthly membership sales for 2024',
                font: {
                    size: 18,
                    lineHeight: 1.5
                }
            }
        },
    }


    return (
        <div className='card w-[400px] shadow-2xl rounded-lg bg-stone-50 p-2 hover:bg-sky-100 hover:text-slate-800 cursor-pointer transform transition-transform duration-300 hover:scale-105'>
            <h3 className='text-center text-lg my-3 font-bold font-geist'>Monthly Membership Incomes</h3>
            <Line data={data} options={options}/>
        </div>
    )
}