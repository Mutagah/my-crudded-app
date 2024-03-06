import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// Importing the http Client Module so as to use HttpClient in our service
import { HttpClientModule } from '@angular/common/http';

import { DataFetchService } from './data-fetch.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [AppComponent, ReactiveFormComponent, HomeComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [DataFetchService],
  bootstrap: [AppComponent],
})
export class AppModule {}
