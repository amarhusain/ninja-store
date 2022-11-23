import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';
import { LoginPageComponent } from './core/login-page/login-page.component';
import { ToolbarComponent } from './core/toolbar/toolbar.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomePageComponent,
    PageNotFoundComponent,
    LoginPageComponent,
    ToolbarComponent, 
   ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
