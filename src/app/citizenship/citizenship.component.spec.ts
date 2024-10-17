import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitizenshipComponent } from './citizenship.component';

describe('CitizenshipComponent', () => {
  let component: CitizenshipComponent;
  let fixture: ComponentFixture<CitizenshipComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CitizenshipComponent]
    });
    fixture = TestBed.createComponent(CitizenshipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
