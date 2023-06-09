import { Component, OnInit } from '@angular/core';
import { DARK_THEME, LIGHT_THEME } from '../../models/chart.model';
import { ChartService } from '../../services/chart.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent implements OnInit {
  constructor(private chartService: ChartService) {}

  isDarkTheme: boolean = JSON.parse(
    localStorage.getItem('isDarkTheme') as string
  );
  currentTheme = DARK_THEME;
  ngOnInit(): void {
    console.log(this.isDarkTheme);
  }

  /**
   * toggleTheme
   */
  public toggleTheme() {
    let text = 'Do you want to change theme?';
    if (confirm(text) && this.isDarkTheme) {
      this.chartService.changeAppTheme(DARK_THEME, this.isDarkTheme);
    } else {
      this.chartService.changeAppTheme(LIGHT_THEME, this.isDarkTheme);
    }
  }
}
