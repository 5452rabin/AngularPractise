import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { DatepickerOverviewExample } from './datepicker-overview-example/datepicker-overview-example.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { FormsModule } from '@angular/forms';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import { AssignmentComponent } from './assignment/assignment.component';
import { Assignment2Component } from './assignment2/assignment2.component';
import { NavbarComponent } from './navbar/navbar.component';
import {MatIconModule} from '@angular/material/icon';
import { HomeComponent } from './home/home.component';
import { CardComponent } from './card/card.component';
import {MatCardModule} from '@angular/material/card';
@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    DatepickerOverviewExample,
    AssignmentComponent,
    Assignment2Component,
    NavbarComponent,
    HomeComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatFormFieldModule, 
    MatInputModule, 
    MatDatepickerModule,
    FormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
