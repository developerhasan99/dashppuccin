"use client";

import { ApexOptions } from "apexcharts";
import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";

const options: ApexOptions = {
    legend: {
        show: false,
        position: "top",
        horizontalAlign: "left",
    },
    colors: ["#cba6f7", "#89b4fa"],
    chart: {
        fontFamily: "Inter, sans-serif",
        height: 335,
        type: "area",
        toolbar: {
            show: false,
        },
    },
    responsive: [
        {
            breakpoint: 1024,
            options: {
                chart: {
                    height: 300,
                },
            },
        },
        {
            breakpoint: 1366,
            options: {
                chart: {
                    height: 350,
                },
            },
        },
    ],
    stroke: {
        width: [2, 2],
        curve: "smooth",
    },
    grid: {
        xaxis: {
            lines: {
                show: true,
            },
        },
        yaxis: {
            lines: {
                show: true,
            },
        },
    },
    dataLabels: {
        enabled: false,
    },
    markers: {
        size: 4,
        colors: "#f9e2af",
        strokeColors: ["#cba6f7", "#89b4fa"],
        strokeWidth: 3,
        strokeOpacity: 0.9,
        strokeDashArray: 0,
        fillOpacity: 1,
        discrete: [],
        hover: {
            size: undefined,
            sizeOffset: 5,
        },
    },
    xaxis: {
        type: "category",
        categories: [
            "Sep",
            "Oct",
            "Nov",
            "Dec",
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
        ],
        axisBorder: {
            show: false,
        },
        axisTicks: {
            show: false,
        },
        tooltip: {
            enabled: false,
        },
    },
    yaxis: {
        title: {
            style: {
                fontSize: "0px",
            },
        },
        min: 0,
        max: 100,
    },
};

interface LineChartState {
    series: {
        name: string;
        data: number[];
    }[];
}

const LineChart: React.FC = () => {
    const [state, setState] = useState<LineChartState>({
        series: [
            {
                name: "Product One",
                data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 45],
            },
            {
                name: "Product Two",
                data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39, 51],
            },
        ],
    });

    return (
        <div className="pl-4 pb-4 pt-6 pr-6 border-yellow border-[3px] rounded-3xl bg-base">
            <ReactApexChart
                options={options}
                series={state.series}
                type="area"
                height={350}
                width={"100%"}
            />
        </div>
    );
};

export default LineChart;
