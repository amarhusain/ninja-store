import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerCareComponent } from './core/customer-care/customer-care.component';
import { LoginPageComponent } from './core/login-page/login-page.component';
import { NotificationComponent } from './core/notification/notification.component';
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';
import { HomePageComponent } from './home-page/home-page.component';

const routes: Routes = [
	{ path: 'home', component: HomePageComponent },
	{ path: 'notification', component: NotificationComponent },
	{ path: 'customer-care', component: CustomerCareComponent },
	{
		path: 'cart', loadChildren: () =>
			import('./cart/cart.module').then(m => m.CartModule)
	},

	{
		path: 'new-arival', loadChildren: () =>
			import('./new-arival/new-arival.module').then(m => m.NewArivalModule)
	},
	{
		path: 'order', loadChildren: () =>
			import('./order/order.module').then(m => m.OrderModule)
	},
	{
		path: 'about', loadChildren: () =>
			import('./about/about.module').then(m => m.AboutModule)
	},
	{
		path: 'career', loadChildren: () =>
			import('./career/career.module').then(m => m.CareerModule)
	},
	{ path: '', redirectTo: '/home', pathMatch: 'full' },
	{ path: '**', component: PageNotFoundComponent },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }

