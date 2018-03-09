import { TestBed, inject } from '@angular/core/testing';
import { MockBackend } from '@angular/http/testing';
import { Http, Response, Headers, URLSearchParams, RequestOptions } from '@angular/http';
import { LoginService } from './login.service';
import { ServiceUrlProviderService } from '../serviceurlprovider.service';
describe('LoginService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoginService,{provide: Http, deps: [MockBackend]},
       ServiceUrlProviderService, { provide: ServiceUrlProviderService, useClass: ServiceUrlProviderService}]
    });
  });

  it('should be created', inject([LoginService], (service: LoginService) => {
    expect(service).toBeTruthy();
  }));
});
