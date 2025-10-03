import { TestBed } from '@angular/core/testing';

import { Quests } from './quests';

describe('Quests', () => {
  let service: Quests;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Quests);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
