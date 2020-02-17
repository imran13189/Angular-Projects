import { TestBed } from '@angular/core/testing';

import { LoginsuccessService } from './loginsuccess.service';

describe('LoginsuccessService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LoginsuccessService = TestBed.get(LoginsuccessService);
    expect(service).toBeTruthy();
  });
});
