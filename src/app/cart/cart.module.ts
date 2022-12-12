import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { CartDashboardComponent } from './cart-dashboard/cart-dashboard.component';


@NgModule({
  declarations: [
    CartDashboardComponent
  ],
  imports: [
    CommonModule,
    CartRoutingModule
  ]
})
export class CartModule { }
