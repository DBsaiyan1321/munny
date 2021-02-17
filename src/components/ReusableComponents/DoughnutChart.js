import React, { useEffect, useRef, useState } from "react"; 
import Chart from 'chart.js';
import "chartjs-plugin-labels";
import "./DoughnutChart.css";

const DoughnutChart = props => { 
    const [chart, setChart] = useState(null);

    const chartRef = useRef();

    useEffect(() => { 
        const myChartRef = chartRef.current.getContext("2d");

        setChart(new Chart(myChartRef, {
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
                legend: {
                    labels: {
                        fontColor: 'white'
                    }
                },
                events: [],
                plugins: {
                    labels: [
                        {
                            render: 'label',
                            fontColor: 'white'
                        },
                        {
                            render: 'percentage',
                            position: 'outside'
                        } 
                    ]
                }
            }
        }))
    }, []); 

    useEffect(() => { 
        if (chart) { 
            let copy = chart; 
            copy.data.datasets.forEach(dataset => {
                dataset.data = props.data;
            });
            copy.update();
            setChart(copy);
        }
    }, [props.data])

    return <div className="chart"><canvas id="myChart" width="200" height="200" ref={chartRef}></canvas></div>
};

export default DoughnutChart;