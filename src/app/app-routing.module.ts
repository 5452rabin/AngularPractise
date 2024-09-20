import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Assignment2Component } from './assignment2/assignment2.component';
import { AssignmentComponent } from './assignment/assignment.component';
import { UploadImageComponent } from './upload-image/upload-image.component';

const routes: Routes = [

  {path:'',component:HomeComponent},
  {path:'about',component:AssignmentComponent},
  {path:'saveimage',component:UploadImageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }