import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { APP_BASE_HREF } from '@angular/common';
import { EmployeeAdministrationModule } from './employee-administration/employee-administration.module';
import { GlobalService } from './shared/global.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    EmployeeAdministrationModule,
    AppRoutingModule
  ],
  exports: [
    BrowserModule
  ],
  providers: [{ provide: APP_BASE_HREF, useValue: '/' }, GlobalService, HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
