import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxSummaryComponent } from './tax-summary.component';

describe('TaxSummaryComponent', () => {
  let component: TaxSummaryComponent;
  let fixture: ComponentFixture<TaxSummaryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TaxSummaryComponent]
    });
    fixture = TestBed.createComponent(TaxSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
