import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalTestHistoryComponent } from './medical-test-history.component';

describe('MedicalTestHistoryComponent', () => {
  let component: MedicalTestHistoryComponent;
  let fixture: ComponentFixture<MedicalTestHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicalTestHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicalTestHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
