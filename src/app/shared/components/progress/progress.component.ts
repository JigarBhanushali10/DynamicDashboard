import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../card/card.component';
import { ChartService } from 'src/app/core/services/chart.service';

@Component({
  selector: 'app-progress',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './progress.component.html',
})
export class ProgressComponent implements OnInit {
  constructor(private chartService: ChartService) {}

  ngOnInit(): void {
    this.chartService.generateChart({
      canvasId: 'horizontalBarChart',
      type: 'bar',
      labels: [
        'Contracts',
        'Design',
        'Procurement',
        'Construction',
        'Post Construction',
        'Project Completion',
      ],
      data: [100, 80, 19, 0, 0, 0],
      backgroundColor: [
        '#6dca6c',
        '#6dca6c',
        '#df5a9c',
        '#9ca3ac',
        '#9ca3ac',
        '#9ca3ac',
      ],
      borderColor: '#101321',
      dataLabelsAnchorPosition: 'start',
      dataLabelsAlignPosition: 'start',
      displayLegends: false,
      displayXAxils: false,
      displayYAxils: true,
      showDatasetLabelPercentage: true,
      indexAxis: 'y',
      showGridY: false,
      showGridX: false,
    });
  }
}
