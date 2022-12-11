import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CareerRoutingModule } from './career-routing.module';
import { CareerDashboardComponent } from './career-dashboard/career-dashboard.component';


@NgModule({
  declarations: [
    CareerDashboardComponent
  ],
  imports: [
    CommonModule,
    CareerRoutingModule
  ]
})
export class CareerModule { }
