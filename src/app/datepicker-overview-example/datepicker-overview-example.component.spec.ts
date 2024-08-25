import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatepickerOverviewExample } from './datepicker-overview-example.component';

describe('DatepickerOverviewExample', () => {
  let component: DatepickerOverviewExample;
  let fixture: ComponentFixture<DatepickerOverviewExample>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DatepickerOverviewExample]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatepickerOverviewExample);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
