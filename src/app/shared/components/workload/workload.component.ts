import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartService } from 'src/app/core/services/chart.service';

@Component({
  selector: 'app-workload',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './workload.component.html',
  styles: [],
})
export class WorkloadComponent implements OnInit {
  constructor(private chartService: ChartService) {}

  ngOnInit() {
    this.chartService.generateChart({
      canvasId: 'workloadHorizontalBarChart',
      type: 'bar',
      labels: ['Mike', 'Jennifer', 'Brandon', 'Sam', 'George'],
      data: [
        {
          label: 'Completed',
          data: [4, 2, 0, 0, 0],
          backgroundColor: '#85bb5e',
        },
        {
          label: 'Remaining',
          data: [0, 2, 1, 3, 1],
          backgroundColor: '#53d2f9',
        },
        {
          label: 'Overdue',
          data: [0, 0, 0, 0, 0],
          backgroundColor: '#f0514c',
        },
      ],
      dataLabelsAnchorPosition: 'start',
      dataLabelsAlignPosition: 'start',
      displayXAxils: true,
      displayYAxils: true,
      showDatasetLabelPercentage: false,
      indexAxis: 'y',
      stepSizeX: 2,
      showGridY: false,
      isStackX: true,
      isStackY: true,
      isDataArrayObject: true,
      showDatasetLabels: false,
      xMax: 8,
    });
  }
}
