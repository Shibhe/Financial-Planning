import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpentItemComponent } from './spent-item.component';

describe('SpentItemComponent', () => {
  let component: SpentItemComponent;
  let fixture: ComponentFixture<SpentItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpentItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpentItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
