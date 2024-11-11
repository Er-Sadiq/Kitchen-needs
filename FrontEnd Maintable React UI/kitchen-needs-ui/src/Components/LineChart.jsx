import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend);

function LineChart() {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [
      {
        label: 'Sale',
        data: [10, 60, 25, 90, 43, 97, 30],
        fill: false,
        borderColor: '#23263A',
        borderWidth: 3,
        pointBackgroundColor: '#FF6384',
        pointBorderColor: '#ffffff',
        pointBorderWidth: 3,
        pointRadius: 5,
        pointHoverRadius: 10,
        pointHoverBorderColor: '#36A2EB',
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false, 
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: '#2F4F4F',
        },
      },
      y: {
        grid: {
          color: '#f1f5f9',
        },
      },
    },
  };

  return (
    <div className='w-full h-full p-1'>
      <Line data={data} options={options} />
    </div>
  );
}

export default LineChart;
