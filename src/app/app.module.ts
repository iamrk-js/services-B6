import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PassengerDashboardComponent } from './shared/componentes/passenger-dashboard/passenger-dashboard.component';
import { PassengerCountComponent } from './shared/componentes/passenger-dashboard/passenger-count/passenger-count.component';
import { PassengerCardComponent } from './shared/componentes/passenger-dashboard/passenger-card/passenger-card.component';
import { PassengerService } from './shared/services/passenger.service';
import { ProductsModule } from './products/products.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';

@NgModule({
  declarations: [
    AppComponent,
    PassengerDashboardComponent,
    PassengerCountComponent,
    PassengerCardComponent
  ],
  imports: [
    BrowserModule,
    ProductsModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
