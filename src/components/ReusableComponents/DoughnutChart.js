import React, { useEffect, useRef } from "react"; 
import Chart from 'chart.js';
import "chartjs-plugin-labels";

const DoughnutChart = props => { 
    const chartRef = useRef();

    useEffect(() => { 
        const myChartRef = chartRef.current.getContext("2d");

        new Chart(myChartRef, {
            type: 'doughnut',
            data: {
                labels: props.labels,
                datasets: [{
                    label: '# of Votes',
                    data: props.data,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                events: [],
                plugins: {
                    labels: [
                        {
                            render: 'label',
                            fontColor: 'black'
                        },
                        {
                            render: 'percentage',
                            position: 'outside'
                        } 
                    ]
                }
            }
        })
    }, [props.data]); 

    return <div style={{width: "90vw"}}><canvas id="myChart" width="200" height="200" ref={chartRef}></canvas></div>
};

export default DoughnutChart;