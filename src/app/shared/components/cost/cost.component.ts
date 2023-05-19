import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartService } from 'src/app/core/services/chart.service';
import { paddingBelowLegendsPlugin } from 'src/app/core/plugins/chart.plugins';

@Component({
  selector: 'app-cost',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cost.component.html',
  styles: [],
})
export class CostComponent implements OnInit {
  constructor(private chartService: ChartService) {}

  ngOnInit(): void {
    this.updateChart();
  }

  /**
   * updateChart
   */
  public updateChart() {
    this.chartService.generateChart({
      canvasId: 'verticalBarChart',
      type: 'bar',
      isDataArrayObject: true,
      labels: [''],
      data: [
        {
          label: 'Actual',
          data: [3300],
          backgroundColor: '#84ba5d',
          barThickness: 50,
          borderWidth: 2,
        },
        {
          label: 'Planned',
          data: [4600],
          backgroundColor: '#53d2f9',
          barThickness: 50,
          borderWidth: 2,
        },
        {
          label: 'Budget',
          data: [6000],
          backgroundColor: '#4199e0',
          barThickness: 50,
          borderWidth: 2,
        },
      ],
      plugins: [paddingBelowLegendsPlugin],
      dataLabelsAnchorPosition: 'end',
      dataLabelsAlignPosition: 'end',
      displayXAxils: false,
      displayYAxils: true,
      showDatasetLabelPercentage: false,
      showDatasetLabels: false,
      // indexAxis: 'x',
      stepSizeY: 1500,
      customYLabels(value) {
        if (value === 0) return '$' + value;
        return value / 1000 + 'K';
      },
    });
  }
}
