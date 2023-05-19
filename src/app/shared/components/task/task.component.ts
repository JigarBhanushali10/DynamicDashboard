import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../card/card.component';
import { ChartService } from 'src/app/core/services/chart.service';
import { paddingBelowLegendsPlugin } from 'src/app/core/plugins/chart.plugins';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './task.component.html',
})
export class TaskComponent implements OnInit {
  constructor(private chartService: ChartService) {}

  ngOnInit() {
    this.chartService.generateChart({
      canvasId: 'doughnutChart',
      type: 'doughnut',
      labels: ['Not started', 'Completed', 'In progress'],
      data: [10, 6, 2],
      backgroundColor: ['#9ca3ac', '#6acb6d', '#51ccc3'],
      borderColor: '#101321',
      dataLabelsAnchorPosition: 'end',
      dataLabelsAlignPosition: 'end',
      plugins: [paddingBelowLegendsPlugin],
      displayXAxils: false,
      alignLegend: 'center',
      displayYAxils: false,
    });
  }
}
