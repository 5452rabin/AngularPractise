import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
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
import { UploadImageComponent } from './upload-image/upload-image.component';
import {AngularFireModule} from '@angular/fire/compat';
import {AngularFireStorageModule} from '@angular/fire/compat/storage';
import { environment } from '../Environment/environment';
import { CategoriesComponent } from './categories/categories.component';
import { CategoryCardComponent } from './category-card/category-card.component';
import { SearchComponent } from './search/search.component';
import { FooterComponent } from './footer/footer.component';
import { BillEstimationComponent } from './bill-estimation/bill-estimation.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    DatepickerOverviewExample,
    AssignmentComponent,
    Assignment2Component,
    NavbarComponent,
    HomeComponent,
    CardComponent,
    UploadImageComponent,
    CategoriesComponent,
    CategoryCardComponent,
    SearchComponent,
    FooterComponent,
    BillEstimationComponent
   
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
    MatCardModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireStorageModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
