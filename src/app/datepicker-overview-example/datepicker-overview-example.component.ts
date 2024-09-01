import {ChangeDetectionStrategy, Component} from '@angular/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {provideNativeDateAdapter} from '@angular/material/core';

/** @title Basic datepicker */
@Component({
  selector: 'app-datepicker',
  templateUrl: 'datepicker-overview-example.component.html',
  styleUrl:'datepicker-overview-example.component.css',
  standalone: false,
  providers: [provideNativeDateAdapter()],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DatepickerOverviewExample {

  selectedDate: Date | null = null;
  getdate(event:Event):Date{
    console.log(this.selectedDate);
    return this.selectedDate;
  }

  

}
