
// ApexCharts options and config
window.addEventListener("load", function() {
    const getChartOptions = () => {
        return {
            series: [80, 55],
            colors: ["#DB142E", "#F7AE32"],
            chart: {
            height: "250px",
            width: "100%",
            type: "radialBar",
            sparkline: {
                enabled: true,
            },
            },
            plotOptions: {
            radialBar: {
                track: {
                background: '#E5E7EB',
                },
                dataLabels: {
                show: false,
                },
                hollow: {
                margin: 0,
                size: "30%",
                }
            },
            },
            grid: {
            show: false,
            strokeDashArray: 4,
            padding: {
                left: 2,
                right: 2,
                top: -23,
                bottom: -20,
            },
            },
            labels: ["Lula da Silva", "Outros Parlamentares"],
            legend: {
            show: true,
            position: "bottom",
            fontFamily: "Montserrat",
            },
            tooltip: {
            enabled: true,
            x: {
                show: false,
            },
            },
            yaxis: {
            show: false,
            labels: {
                formatter: function (value) {
                return value + '%';
                }
            }
            }
        }
        }
        
        if (document.getElementById("radial-chart-requeriments") && typeof ApexCharts !== 'undefined') {
        var chart = new ApexCharts(document.querySelector("#radial-chart-requeriments"), getChartOptions());
        chart.render();
        }
    });


window.addEventListener("load", function() {
    const getChartOptions = () => {
        return {
            series: [65, 12],
            colors: ["#DB142E", "#F7AE32"],
            chart: {
            height: "250px",
            width: "100%",
            type: "radialBar",
            sparkline: {
                enabled: true,
            },
            },
            plotOptions: {
            radialBar: {
                track: {
                background: '#E5E7EB',
                },
                dataLabels: {
                show: false,
                },
                hollow: {
                margin: 0,
                size: "30%",
                }
            },
            },
            grid: {
            show: false,
            strokeDashArray: 4,
            padding: {
                left: 2,
                right: 2,
                top: -23,
                bottom: -20,
            },
            },
            labels: ["Lula da Silva", "Media de outros Parlamentares"],
            legend: {
            show: true,
            position: "bottom",
            fontFamily: "Montserrat",
            },
            tooltip: {
            enabled: true,
            x: {
                show: false,
            },
            },
            yaxis: {
            show: false,
            labels: {
                formatter: function (value) {
                return value + '%';
                }
            }
            }
        }
        }
        
        if (document.getElementById("radial-chart-draft-resolution") && typeof ApexCharts !== 'undefined') {
        var chart = new ApexCharts(document.querySelector("#radial-chart-draft-resolution"), getChartOptions());
        chart.render();
        }
    });
    
window.addEventListener("load", function() {
    const getChartOptions = () => {
        return {
            series: [65, 12],
            colors: ["#DB142E", "#F7AE32"],
            chart: {
            height: "250px",
            width: "100%",
            type: "radialBar",
            sparkline: {
                enabled: true,
            },
            },
            plotOptions: {
            radialBar: {
                track: {
                background: '#E5E7EB',
                },
                dataLabels: {
                show: false,
                },
                hollow: {
                margin: 0,
                size: "30%",
                }
            },
            },
            grid: {
            show: false,
            strokeDashArray: 4,
            padding: {
                left: 2,
                right: 2,
                top: -23,
                bottom: -20,
            },
            },
            labels: ["Lula da Silva", "Media de outros Parlamentares"],
            legend: {
            show: true,
            position: "bottom",
            fontFamily: "Montserrat",
            },
            tooltip: {
            enabled: true,
            x: {
                show: false,
            },
            },
            yaxis: {
            show: false,
            labels: {
                formatter: function (value) {
                return value + '%';
                }
            }
            }
        }
        }
        
        if (document.getElementById("radial-chart-amendment") && typeof ApexCharts !== 'undefined') {
        var chart = new ApexCharts(document.querySelector("#radial-chart-amendment"), getChartOptions());
        chart.render();
        }
    });


window.addEventListener("load", function() {
    const getChartOptions = () => {
        return {
            series: [65, 12],
            colors: ["#DB142E", "#F7AE32"],
            chart: {
            height: "250px",
            width: "100%",
            type: "radialBar",
            sparkline: {
                enabled: true,
            },
            },
            plotOptions: {
            radialBar: {
                track: {
                background: '#E5E7EB',
                },
                dataLabels: {
                show: false,
                },
                hollow: {
                margin: 0,
                size: "30%",
                }
            },
            },
            grid: {
            show: false,
            strokeDashArray: 4,
            padding: {
                left: 2,
                right: 2,
                top: -23,
                bottom: -20,
            },
            },
            labels: ["Lula da Silva", "Media de outros Parlamentares"],
            legend: {
            show: true,
            position: "bottom",
            fontFamily: "Montserrat",
            },
            tooltip: {
            enabled: true,
            x: {
                show: false,
            },
            },
            yaxis: {
            show: false,
            labels: {
                formatter: function (value) {
                return value + '%';
                }
            }
            }
        }
        }
        
        if (document.getElementById("radial-chart-motion") && typeof ApexCharts !== 'undefined') {
        var chart = new ApexCharts(document.querySelector("#radial-chart-motion"), getChartOptions());
        chart.render();
        }
    });
        


window.addEventListener("load", function() {
    const getChartOptions = () => {
        return {
            series: [65, 12],
            colors: ["#DB142E", "#F7AE32"],
            chart: {
            height: "250px",
            width: "100%",
            type: "radialBar",
            sparkline: {
                enabled: true,
            },
            },
            plotOptions: {
            radialBar: {
                track: {
                background: '#E5E7EB',
                },
                dataLabels: {
                show: false,
                },
                hollow: {
                margin: 0,
                size: "30%",
                }
            },
            },
            grid: {
            show: false,
            strokeDashArray: 4,
            padding: {
                left: 2,
                right: 2,
                top: -23,
                bottom: -20,
            },
            },
            labels: ["Lula da Silva", "Media de outros Parlamentares"],
            legend: {
            show: true,
            position: "bottom",
            fontFamily: "Montserrat",
            },
            tooltip: {
            enabled: true,
            x: {
                show: false,
            },
            },
            yaxis: {
            show: false,
            labels: {
                formatter: function (value) {
                return value + '%';
                }
            }
            }
        }
        }
        
        if (document.getElementById("radial-draft-resolution") && typeof ApexCharts !== 'undefined') {
        var chart = new ApexCharts(document.querySelector("#radial-draft-resolution"), getChartOptions());
        chart.render();
        }
    });
