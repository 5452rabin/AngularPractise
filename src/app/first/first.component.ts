import { Component, ViewChild, viewChild } from '@angular/core';
import {DatepickerOverviewExample} from '../datepicker-overview-example/datepicker-overview-example.component';
@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent  {
  res: Date | null = null;
  @ViewChild(DatepickerOverviewExample) Datepicker!:DatepickerOverviewExample
  callgetdata(event:Event){
    this.res=this.Datepicker.getdate(event);
    console.log("hi"+this.res);
    
  }
}
