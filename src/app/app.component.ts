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
    localStorage.setItem('appTheme', JSON.stringify(DARK_THEME));
    localStorage.setItem('isDarkTheme', JSON.stringify(true));
    this.chartService.changeAppTheme(
      JSON.parse(localStorage.getItem('appTheme') as string),
      JSON.parse(localStorage.getItem('isDarkTheme') as string)
    );
  }
}
