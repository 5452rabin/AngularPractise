import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillEstimationComponent } from './bill-estimation.component';

describe('BillEstimationComponent', () => {
  let component: BillEstimationComponent;
  let fixture: ComponentFixture<BillEstimationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BillEstimationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BillEstimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
