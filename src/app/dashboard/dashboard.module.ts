import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { CardComponent } from '../shared/components/card/card.component';
import { TaskComponent } from '../shared/components/task/task.component';
import { HealthComponent } from '../shared/components/health/health.component';
import { ProgressComponent } from '../shared/components/progress/progress.component';
import { ChartService } from '../core/services/chart.service';
import { TimeComponent } from '../shared/components/time/time.component';
import { CostComponent } from '../shared/components/cost/cost.component';
import { WorkloadComponent } from '../shared/components/workload/workload.component';
import { NavbarComponent } from '../core/components/navbar/navbar.component';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    CardComponent,
    TaskComponent,
    HealthComponent,
    ProgressComponent,
    TimeComponent,
    CostComponent,
    WorkloadComponent,
    NavbarComponent,
  ],
  providers: [ChartService],
})
export class DashboardModule {}
