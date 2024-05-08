"use client";

import { ApexOptions } from "apexcharts";
import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";

const options: ApexOptions = {
    colors: ["#3C50E0", "#80CAEE"],
    chart: {
        fontFamily: "Satoshi, sans-serif",
        type: "bar",
        height: 335,
        stacked: true,
        toolbar: {
            show: false,
        },
        zoom: {
            enabled: false,
        },
    },

    responsive: [
        {
            breakpoint: 1536,
            options: {
                plotOptions: {
                    bar: {
                        borderRadius: 0,
                        columnWidth: "25%",
                    },
                },
            },
        },
    ],
    plotOptions: {
        bar: {
            horizontal: false,
            borderRadius: 0,
            columnWidth: "25%",
            borderRadiusApplication: "end",
            borderRadiusWhenStacked: "last",
        },
    },
    dataLabels: {
        enabled: false,
    },

    xaxis: {
        categories: ["M", "T", "W", "T", "F", "S", "S"],
    },
    legend: {
        position: "top",
        horizontalAlign: "left",
        fontFamily: "Satoshi",
        fontWeight: 500,
        fontSize: "14px",

        markers: {
            radius: 99,
        },
    },
    fill: {
        opacity: 1,
    },
};

interface BarChartState {
    series: {
        name: string;
        data: number[];
    }[];
}

const BarChart: React.FC = () => {
    const [state, setState] = useState<BarChartState>({
        series: [
            {
                name: "Sales",
                data: [44, 55, 41, 67, 22, 43, 65],
            },
            {
                name: "Revenue",
                data: [13, 23, 20, 8, 13, 27, 15],
            },
        ],
    });

    const handleReset = () => {
        setState((prevState) => ({
            ...prevState,
        }));
    };
    handleReset;

    return (
        <div className="p-6 border-[3px] border-sky rounded-3xl bg-base">
            <div className="flex">
                <h2>Profit this week</h2>
                <div></div>
            </div>
            <div>
                <div>
                    <span className="inline-block h-2 w-2 bg-peach"></span>
                </div>
            </div>
            <ReactApexChart
                options={options}
                series={state.series}
                type="bar"
                height={350}
                width={"100%"}
            />
        </div>
    );
};

export default BarChart;
