import React from "react";
import {observer} from "mobx-react";
import { Bar } from 'react-chartjs-2';
import store from "../../functions/store";
import '../../App.css';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);
export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top' as const,
        },
        title: {
            display: true,
            text: 'Плотность распределения',
        },
    },
};


export const labels: number[] = [];
for (let i = 0; i < 100; i++) {
    labels.push(i);
}


const Histogram: React.FC = (observer(() => {
    const data = {
        labels,
        datasets: store.getDatasetsHistogram(),
    };

    return(
        <div className="chart">
            <Bar options={options} data={data}/>
        </div>

    )
}))

export default Histogram;