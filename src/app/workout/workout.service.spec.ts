import { TestBed, inject } from '@angular/core/testing';

import { WorkoutService } from './workout.service';
import { MockBackend } from '@angular/http/testing';
import { Http, Response, Headers, URLSearchParams, RequestOptions } from '@angular/http';
import { ServiceUrlProviderService } from '../serviceurlprovider.service';
describe('WorkoutService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WorkoutService,{provide: Http, deps: [MockBackend]},
      ServiceUrlProviderService, { provide: ServiceUrlProviderService, useClass: ServiceUrlProviderService}]
    });
  });

  it('should be created', inject([WorkoutService], (service: WorkoutService) => {
    expect(service).toBeTruthy();
  }));
});
