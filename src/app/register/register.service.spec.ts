import { TestBed, inject } from '@angular/core/testing';
import { MockBackend } from '@angular/http/testing';
import { Http, Response, Headers, URLSearchParams, RequestOptions } from '@angular/http';
import { RegisterService } from './register.service';
import { ServiceUrlProviderService } from '../serviceurlprovider.service';
describe('RegisterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
    
      providers: [RegisterService,{provide: Http, deps: [MockBackend]},
      ServiceUrlProviderService, { provide: ServiceUrlProviderService, useClass: ServiceUrlProviderService}]
    });
  });

  it('should be created', inject([RegisterService], (service: RegisterService) => {
    expect(service).toBeTruthy();
  }));
});
