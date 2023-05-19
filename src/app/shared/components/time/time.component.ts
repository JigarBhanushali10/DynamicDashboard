import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartService } from 'src/app/core/services/chart.service';

@Component({
  selector: 'app-time',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './time.component.html',
  styles: [],
})
export class TimeComponent implements OnInit {
  constructor(private chartService: ChartService) {}

  ngOnInit() {
    this.chartService.generateChart({
      canvasId: 'timeHorizontalBarChart',
      type: 'bar',
      labels: ['Planned Completion', 'Actual Completion', 'Ahead', '', '', ''],
      data: [
        {
          label: 'Actual',
          data: [],
          backgroundColor: '#3facf4',
          barThickness: 25,
        },
        {
          label: 'Behind',
          data: [],
          barThickness: 25,
          backgroundColor: '#f7a651',
        },
        {
          label: 'On Time',
          barThickness: 25,
          data: [0, 14, 14],
          backgroundColor: '#66ce6a',
        },
      ],
      dataLabelsAnchorPosition: 'start',
      dataLabelsAlignPosition: 'start',
      displayXAxils: true,
      displayYAxils: true,
      showDatasetLabelPercentage: true,
      indexAxis: 'y',
      xMax: 100,
      xMin: -100,
      stepSizeX: 25,
      showGridY: false,
      isDataArrayObject: true,
    });
  }
}
