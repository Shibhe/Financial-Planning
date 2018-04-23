import { TestBed, inject } from '@angular/core/testing';

import { LineItemsService } from './line-items.service';

describe('LineItemsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LineItemsService]
    });
  });

  it('should be created', inject([LineItemsService], (service: LineItemsService) => {
    expect(service).toBeTruthy();
  }));
});
