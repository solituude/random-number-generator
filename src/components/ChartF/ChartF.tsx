import React from "react";
import {observer} from "mobx-react";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import store from "../../functions/store";
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);
export const options = {
    responsive: true,
    scales: {
        y: {
            max: 1,
        }
    },
    plugins: {
        legend: {
            position: 'top' as const,
        },
        title: {
            display: true,
            text: 'Функция распределения',
            fontSize: 18,
        },
    },
};
export const labels: number[] = [];
for (let i = 0; i < 100; i++) {
    labels.push(i);
}

const d1 = []
for (let i = 0; i < 100; i++ ){
    d1.push(i);
}


const ChartF: React.FC = (observer(() => {
    const data = {
        labels,
        datasets: store.getDatasetLineChart(),
    };
    return(
        <div className="chart">
            <Line options={options} data={data}/>
        </div>
    )
}))

export default ChartF;