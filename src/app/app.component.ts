import { Component } from '@angular/core';
import { ChartService } from './core/services/chart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'DynamicDashboard';
  // localStorage.setItem('appTheme', JSON.stringify(DARK_THEME));
  // localStorage.setItem('isDarkTheme', JSON.stringify(true));
  constructor(private chartService: ChartService) {
    this.chartService.changeAppTheme(
      JSON.parse(localStorage.getItem('appTheme') as string),
      JSON.parse(localStorage.getItem('isDarkTheme') as string)
    );
  }
}
