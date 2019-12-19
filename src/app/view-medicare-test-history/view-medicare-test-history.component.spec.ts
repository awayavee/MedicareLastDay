import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMedicareTestHistoryComponent } from './view-medicare-test-history.component';

describe('ViewMedicareTestHistoryComponent', () => {
  let component: ViewMedicareTestHistoryComponent;
  let fixture: ComponentFixture<ViewMedicareTestHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewMedicareTestHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewMedicareTestHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
