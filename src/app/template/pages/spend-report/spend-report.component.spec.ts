import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpendReportComponent } from './spend-report.component';

describe('SpendReportComponent', () => {
  let component: SpendReportComponent;
  let fixture: ComponentFixture<SpendReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpendReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpendReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
