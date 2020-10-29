import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegistroComponent } from './components/landing/auth/registro/registro.component';
import { HomeComponent } from './components/productos/home/home.component';
import { SharedModule } from './components/shared/shared.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor, httpInterceptorProviders } from './services/auth/auth-interceptor.service';
import { ErrorInterceptor } from './services/auth/error.interceptor';
import { KardexModule } from './components/kardex/kardex.module';
import { RouterModule } from '@angular/router';
import { GlobalErrorHandler } from './services/error/globalerrorhandler';
import { LandingModule } from './components/landing/landing.module';
import { ServerErrorInterceptor } from './services/error/servererrorinterceptor';

@NgModule({
  declarations: [
    AppComponent,
    RegistroComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule,
    SharedModule,
    HttpClientModule,
    KardexModule,
    LandingModule
  ],
  providers: [

    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    {provide: HTTP_INTERCEPTORS, useClass: ServerErrorInterceptor, multi: true},
    httpInterceptorProviders
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
