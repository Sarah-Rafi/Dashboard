import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
export default function PaymentCollectedBarChart() {
    const chartRef = useRef(null);
    useEffect(() => {
        const ctx = chartRef.current.getContext('2d');
        const borderRadius = 8.16; 
        const data = {
            labels: [
                'Jan', 'Feb', 'March', 'April', 'May', 'June',
                'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'
            ],
            datasets: [
                {
                    label: 'Amount Received',
                    data: [300, 400, 100, 200, 300, 400, 100, 200, 500, 200, 200, 500],
                    backgroundColor: '#34B44A',
                    borderColor: '#34B44A',
                    borderWidth: 1,
                    borderRadius: borderRadius,
                    barPercentage: 0.8,
                    categoryPercentage: 0.8,
                },
                {
                    label: 'Amount Earned',
                    data: [200, 300, 400, 100, 400, 300, 500, 100, 200, 400, 300, 100],
                    backgroundColor: '#F2EFFF',
                    borderColor: '#F2EFFF',
                    borderWidth: 1,
                    borderRadius: borderRadius,
                    barPercentage: 0.8,
                    categoryPercentage: 0.8,
                },
            ],
        };
        const options = {
            responsive: true, // Ensure chart is responsive
            maintainAspectRatio: false, // Prevent distortion of aspect ratio
            scales: {
                x: {
                    stacked: true,
                },
                y: {
                    stacked: true,
                    beginAtZero: true,
                },
            },
            plugins: {
                legend: {
                    display: true,
                    position: 'top',
                },
            },
        };
        // Destroy previous chart if it exists
        if (chartRef.current && chartRef.current.chart) {
            chartRef.current.chart.destroy();
        }
        // Create a new chart
        chartRef.current.chart = new Chart(ctx, {
            type: 'bar',
            data: data,
            options: options,
        });
    }, []);
    return (
        <div class="flex w-full h-full">
            <div class="flex w-full h-full">
                <canvas ref={chartRef} class="w-[1000px] h-[300px]" />
            </div>
        </div>
    );
}
