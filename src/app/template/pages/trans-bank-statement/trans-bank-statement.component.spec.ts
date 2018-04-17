import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransBankStatementComponent } from './trans-bank-statement.component';

describe('TransBankStatementComponent', () => {
  let component: TransBankStatementComponent;
  let fixture: ComponentFixture<TransBankStatementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransBankStatementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransBankStatementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
