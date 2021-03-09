import React from 'react';
import { Line, Bar } from 'react-chartjs-2';
import { useState } from 'react';
import { useEffect } from 'react';
const chartColor = '#FFFFFF';



const ChartLine = () => {

    const [dataLine, setDataLine] = useState([]);
    const [labels, setLabels] = useState([]);


    const data = (canvas) => {
        var ctx = canvas.getContext("2d");

        var gradientStroke = ctx.createLinearGradient(500, 0, 100, 0);
        gradientStroke.addColorStop(0, '#80b6f4');
        gradientStroke.addColorStop(1, chartColor);


        return {
            labels: labels,
            datasets: [{
                label: "Facturas realizadas",
                borderColor: "#3260f9",
                pointBorderColor: "#FFF",
                pointBackgroundColor: "#32b0f9",
                pointBorderWidth: 2,
                pointHoverRadius: 4,
                pointHoverBorderWidth: 1,
                pointRadius: 1,
                fill: true,
                /*backgroundColor: gradientFill,*/
                borderWidth: 1,
                data: dataLine
            }]
        }
    };
    const options = {
        maintainAspectRatio: false,
        legend: {
            display: true
        },
        tooltips: {
            bodySpacing: 4,
            mode: "nearest",
            intersect: 0,
            position: "nearest",
            xPadding: 10,
            yPadding: 10,
            caretPadding: 10
        },
        responsive: 1,
        scales: {
            yAxes: [{
                display: 1,
                ticks: {
                    display: true
                },
                gridLines: {
                    zeroLineColor: "transparent",
                    drawTicks: false,
                    display: false,
                    drawBorder: false
                }
            }],
            xAxes: [{
                display: 1,
                ticks: {
                    display: true
                },
                gridLines: {
                    zeroLineColor: "transparent",
                    drawTicks: false,
                    display: false,
                    drawBorder: false
                }
            }]
        },
        layout: {
            padding: { left: 0, right: 0, top: 15, bottom: 15 }
        }
    };

    useEffect(() => {
        setDataLine([542, 480, 430, 550, 530, 453, 380, 434, 568, 610, 700, 630]);
        setLabels(["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]);

    }, []);
    return (
        <Line data={data} options={options} />
    );
}

export default ChartLine;
