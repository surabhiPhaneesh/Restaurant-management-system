import { TestBed } from '@angular/core/testing';

import { ItemcrudServiceService } from './itemcrud-service.service';

describe('ItemcrudServiceService', () => {
  let service: ItemcrudServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ItemcrudServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
