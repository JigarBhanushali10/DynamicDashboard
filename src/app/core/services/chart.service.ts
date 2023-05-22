import { Injectable } from '@angular/core';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { Chart, registerables } from 'chart.js';
import { ChartServiceType } from '../models/chart.model';

Chart.register(...registerables, ChartDataLabels);

@Injectable()
export class ChartService {
  chart!: Chart;
  isDarkTheme: boolean = JSON.parse(
    localStorage.getItem('isDarkTheme') as string
  );
  constructor() {}

  /**
   * updateChart
   */
  public updateChart() {
    if (!this.chart) return;
  }

  /**
   * generateChart
   */
  public generateChart({
    canvasId,
    type,
    labels = [],
    data,
    backgroundColor,
    borderColor,
    plugins = [],
    dataLabelsAnchorPosition,
    dataLabelsAlignPosition,
    displayLegends = true,
    displayXAxils = true,
    displayYAxils = true,
    showDatasetLabelPercentage = false,
    indexAxis,
    xMax,
    xMin,
    showDatasetLabels = true,
    stepSizeX,
    stepSizeY,
    showGridY,
    showGridX,
    customYLabels,
    isStackX = false,
    isStackY = false,
    isDataArrayObject = false,
    barThickness = 25,
    alignLegend = 'start',
    legendColor = 'gray',
    ticksColor = 'gray',
  }: ChartServiceType) {
    let datalabels = {
      anchor: dataLabelsAnchorPosition, // dynamic
      align: dataLabelsAlignPosition,
      offset: 1,
      clamp: true,
      color: function (context: any) {
        return context.dataset.backgroundColor;
      },
      font: {
        weight: 'bold',
        size: 14,
      },
      clip: false,
      formatter: function (value: any) {
        if (!showDatasetLabels) return '';
        if (!showDatasetLabelPercentage) return value;
        return value + '%';
      },
    };

    let datasets: any;
    if (isDataArrayObject) {
      datasets = data;
      data.forEach((element: any) => {
        element.datalabels = datalabels;
      });
    } else {
      datasets = [
        {
          data: data, // dynamic
          backgroundColor: backgroundColor, // dynamic
          borderColor: borderColor, // dynamic
          hoverOffset: 4,
          barThickness: barThickness,
          datalabels: datalabels,
        },
      ];
    }

    this.chart = new Chart(canvasId, {
      // dynamic
      type: type,
      data: {
        labels: labels, // dynamic
        datasets: datasets,
      },
      options: {
        indexAxis: indexAxis,
        responsive: true,
        maintainAspectRatio: false,
        cutout: '85%',
        scales: {
          x: {
            stacked: isStackX,
            display: displayXAxils, // dynamic
            max: xMax,
            min: xMin,
            ticks: {
              beginAtZero: true,
              stepSize: stepSizeX,
              color: ticksColor,
            },
            grid: {
              display: showGridX,
              color: '#9da4ad',
            },
            border: {
              display: false,
              color: '#9da4ad',
            },
          },
          y: {
            stacked: isStackY,
            display: displayYAxils,
            ticks: {
              color: ticksColor,
              stepSize: stepSizeY,
              font: { size: 16, weight: 'bold' },
              beginAtZero: true,

              padding: 30,
              crossAlign: 'far',
              callback:
                customYLabels ??
                function (value: any, index: any, ticks: any, chart: any) {
                  return labels[index];
                },
            },

            // dynamic
            border: {
              display: false,
            },
            grid: {
              display: showGridY,
              color: '#9da4ad',
            },
          },
        },
        plugins: {
          legend: {
            align: alignLegend,
            display: displayLegends, // dynamic
            labels: {
              padding: 16,
              color: legendColor,
              font: {
                size: 14.5,
              },
              // generateLabels: function (chart: any): any {
              //   const datasets: any = chart.data.datasets;
              //   const labels: any = chart.data.labels.map((ele: any) => ele);

              //   return datasets[0].data.map((data: any, i: any) => {
              //     return {
              //       text: `${labels[i]} (${data})`,
              //       fillStyle: chart.data.datasets[0].backgroundColor[i],
              //       fontColor: '#9ca3ab',
              //       index: i,
              //     };
              //   });
              // },
              usePointStyle: true,
            },
          },
        },
      },
      plugins: [...plugins, ChartDataLabels], // dynamic
    });
  }

  /**
   * changeAppTheme
   */
  public changeAppTheme(theme: any, isDarkTheme: boolean) {
    localStorage.setItem('appTheme', JSON.stringify(theme));
    localStorage.setItem('isDarkTheme', JSON.stringify(isDarkTheme));
    this.updateChart();
    if (theme) {
      Object.entries(theme).forEach((ele) => {
        document.documentElement.style.setProperty(ele[0], ele[1] as string);
      });
    }
  }
}
