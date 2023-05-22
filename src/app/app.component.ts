import { Component } from '@angular/core';
import { ChartService } from './core/services/chart.service';
import { DARK_THEME } from './core/models/chart.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'DynamicDashboard';
  constructor(private chartService: ChartService) {
    this.chartService.changeAppTheme(DARK_THEME, true);
  }
}
