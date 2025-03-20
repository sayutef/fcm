import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp } from 'firebase/app';
import { getMessaging } from 'firebase/messaging';
import { firebaseConfig } from '../environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { LandingComponent } from './landing/landing.component';
import { HeaderComponent } from './header/header.component';
import { PageTComponent } from './page-t/page-t.component';
import { PageRComponent } from './page-r/page-r.component';
import { PageEComponent } from './page-e/page-e.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [AppComponent, LandingComponent, HeaderComponent, PageTComponent, PageRComponent, PageEComponent, LoginComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor() {

    const app = initializeApp(firebaseConfig);

    const messaging = getMessaging(app);
  }
}
