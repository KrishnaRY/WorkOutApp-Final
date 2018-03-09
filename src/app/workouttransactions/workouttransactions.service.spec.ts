import { TestBed, inject } from '@angular/core/testing';
import { MockBackend } from '@angular/http/testing';
import { Http, Response, Headers, URLSearchParams, RequestOptions } from '@angular/http';
import { WorkouttransactionsService } from './workouttransactions.service';
import { ServiceUrlProviderService } from '../serviceurlprovider.service';
describe('WorkouttransactionsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WorkouttransactionsService,{provide: Http, deps: [MockBackend]},
      ServiceUrlProviderService, { provide: ServiceUrlProviderService, useClass: ServiceUrlProviderService}]
    });
  });

  it('should be created', inject([WorkouttransactionsService], (service: WorkouttransactionsService) => {
    expect(service).toBeTruthy();
  }));
});
