import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CareerDashboardComponent } from './career-dashboard/career-dashboard.component';

const routes: Routes = [
  { path: '', component: CareerDashboardComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CareerRoutingModule { }
