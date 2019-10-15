var line_option = {
    title: {
        text: "未来一周气温变化",
        subtext: "纯属虚构"
    },
    tooltip: {
        trigger: "axis",
        backgroundColor: "rgba(255, 255, 255, 0.7)",
        textStyle: {
            color: "rgb(255, 255, 255)"
        }
    },
    legend: {
        data: ["数值1", "数值2"],
        backgroundColor: "rgba(0, 0, 0, 0)",
        borderColor: "rgb(255, 255, 255)",
        textStyle: {
            color: "rgb(255, 255, 255)"
        }
    },
    toolbox: {
        show: true,
        feature: {
            mark: {
                show: true
            },
            dataView: {
                show: true,
                readOnly: true
            },
            magicType: {
                show: false,
                type: ["line", "bar"]
            },
            restore: {
                show: true
            },
            saveAsImage: {
                show: true
            }
        }
    },
    calculable: true,
    xAxis: [
        {
            type: "category",
            boundaryGap: false,
            data: ["2", "3", "4", "5", "6", "7", "8"],
            nameTextStyle: {
                color: "rgb(255, 255, 255)"
            }
        }
    ],
    yAxis: [
        {
            type: "value",
            name: "°C",
            nameTextStyle: {
                color: "rgb(255, 255, 255)"
            },
            axisLabel: {
                textStyle: {
                    color: "rgb(255, 255, 255)"
                }
            },
            axisTick: {
                lineStyle: {
                    color: "rgb(255, 255, 255)"
                }
            }
        }
    ],
    series: [
        {
            name: "数值1",
            type: "line",
            data: [11, 11, 12, 321, 3, 21, 213],
            smooth: true
        },
        {
            name: "数值2",
            type: "line",
            data: [1, -2, 12, 123, 21, 21, 211],
            smooth: true
        }
    ]
};

var echart_2 = echarts.init(document.getElementById('chart2'));
echart_2.setOption(line_option);

var line_option = {
    title: {
        text: "未来一周气温变化",
        subtext: "纯属虚构"
    },
    tooltip: {
        trigger: "axis",
        backgroundColor: "rgba(255, 255, 255, 0.7)",
        textStyle: {
            color: "rgb(255, 255, 255)"
        }
    },
    legend: {
        data: ["数值1", "数值2"],
        backgroundColor: "rgba(0, 0, 0, 0)",
        borderColor: "rgb(255, 255, 255)",
        textStyle: {
            color: "rgb(255, 255, 255)"
        }
    },
    toolbox: {
        show: true,
        feature: {
            mark: {
                show: true
            },
            dataView: {
                show: true,
                readOnly: true
            },
            magicType: {
                show: false,
                type: ["line", "bar"]
            },
            restore: {
                show: true
            },
            saveAsImage: {
                show: true
            }
        }
    },
    calculable: true,
    xAxis: [
        {
            type: "category",
            boundaryGap: false,
            data: ["2", "3", "4", "5", "6", "7", "8"],
            nameTextStyle: {
                color: "rgb(255, 255, 255)"
            }
        }
    ],
    yAxis: [
        {
            type: "value",
            name: "°C",
            nameTextStyle: {
                color: "rgb(255, 255, 255)"
            },
            axisLabel: {
                textStyle: {
                    color: "rgb(255, 255, 255)"
                }
            },
            axisTick: {
                lineStyle: {
                    color: "rgb(255, 255, 255)"
                }
            }
        }
    ],
    series: [
        {
            name: "数值1",
            type: "line",
            data: [11, 11, 12, 321, 3, 21, 213],
            smooth: true
        },
        {
            name: "数值2",
            type: "line",
            data: [1, -2, 12, 123, 21, 21, 211],
            smooth: true
        }
    ]
};

var echart_3 = echarts.init(document.getElementById('chart3'));
echart_3.setOption(line_option);
