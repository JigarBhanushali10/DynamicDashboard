import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MasterComponent } from './components/master/master.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DashboardModule } from '../dashboard/dashboard.module';

@NgModule({
  declarations: [MasterComponent, SidebarComponent, HeaderComponent],
  imports: [
    RouterModule,
    CommonModule,
    FormsModule,
    NavbarComponent,
    DashboardModule,
  ],
  exports: [MasterComponent],
})
export class CoreModule {}
