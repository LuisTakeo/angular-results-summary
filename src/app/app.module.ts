import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ResultValueComponent } from './components/result-value/result-value.component';
import { ResultsComponent } from './components/results/results.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ResultValueComponent,
    ResultsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
