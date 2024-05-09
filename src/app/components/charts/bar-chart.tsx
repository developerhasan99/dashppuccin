"use client";

import { ApexOptions } from "apexcharts";
import dynamic from "next/dynamic";
import React, { useState } from "react";

const ReactApexChart = dynamic(() => import("react-apexcharts"), {
    ssr: false,
});

const options: ApexOptions = {
    colors: ["#3C50E0", "#80CAEE"],
    chart: {
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
            <div className="flex gap-6 flex-wrap justify-between mb-4 px-4">
                <h2 className="font-bold text-xl text-text">
                    Profit this week
                </h2>
                <div className="p-1 flex gap-1 bg-mantle border-2 border-maroon rounded-3xl">
                    <button className="text-xs text-base bg-peach px-2 rounded-3xl">
                        This week
                    </button>
                    <button className="text-xs text-text bg-surface-1 px-2 rounded-3xl">
                        Last week
                    </button>
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
