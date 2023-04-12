import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModulesModule } from './material-modules/material-modules.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CoreModule } from './core/core.module';
import { HttpClientModule } from '@angular/common/http';
import { AllBookingsComponent } from './components/all-bookings/all-bookings.component';
import { EditBookingsComponent } from './components/edit-bookings/edit-bookings.component';





@NgModule({
  declarations: [
    AppComponent,
    AllBookingsComponent,
    EditBookingsComponent,
 
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModulesModule,
    ReactiveFormsModule,
    CoreModule,
    HttpClientModule

   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
