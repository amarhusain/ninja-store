import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerCareComponent } from './core/customer-care/customer-care.component';
import { NotificationComponent } from './core/notification/notification.component';
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';
import { SigninPageComponent } from './core/signin-page/signin-page.component';
import { SignupPageComponent } from './core/signup-page/signup-page.component';
import { HomePageComponent } from './home-page/home-page.component';

const routes: Routes = [
	{ path: 'home', component: HomePageComponent },
	{ path: 'notification', component: NotificationComponent },
	{ path: 'customer-care', component: CustomerCareComponent },
	{ path: 'signin', component: SigninPageComponent },
	{ path: 'signup', component: SignupPageComponent },
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
	{
		path: 'work-with-us', loadChildren: () =>
			import('./work-with-us/work-with-us.module').then(m => m.WorkWithUsModule)
	},
	{
		path: 'select-product/:sku', loadChildren: () =>
			import('./select-product/select-product.module').then(m => m.SelectProductModule)
	},
	{
		path: 'product-detail', loadChildren: () =>
			import('./product-detail/product-detail.module').then(m => m.ProductDetailModule)
	},
	{ path: '', redirectTo: '/home', pathMatch: 'full' },
	{ path: '**', component: PageNotFoundComponent },
];

@NgModule({
	imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: "enabled" })],
	exports: [RouterModule]
})
export class AppRoutingModule { }

