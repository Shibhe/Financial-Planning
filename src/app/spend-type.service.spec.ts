import { TestBed, inject } from '@angular/core/testing';

import { SpendTypeService } from './spend-type.service';

describe('SpendTypeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SpendTypeService]
    });
  });

  it('should be created', inject([SpendTypeService], (service: SpendTypeService) => {
    expect(service).toBeTruthy();
  }));
});
