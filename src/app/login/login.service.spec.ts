import { TestBed, inject } from '@angular/core/testing';
import { MockBackend } from '@angular/http/testing';
import { Http, Response, Headers, URLSearchParams, RequestOptions } from '@angular/http';
import { LoginService } from './login.service';
import { ServiceUrlProviderService } from '../serviceurlprovider.service';
describe('LoginService', () => {
  let http:Http,
      injector:injector,
      backend:MockBackend,
      setfunction:Function,
      loginService:LoginService,
      responseBody:object;


  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoginService,{provide: Http, deps: [MockBackend]},
       ServiceUrlProviderService, { provide: ServiceUrlProviderService, useClass: ServiceUrlProviderService}]
    });

    http=injector.get(Http);
    backend=injector.get(MockBackend);
    loginService=injector.get(LoginService);
    setfunction=(options):void=>{
      const responseOptions={body:options};
      baseResponse=new Response(new responseOptions(responseOptions));
      backend.connectons.subscribe((connection:MockConnection)=>{
      connecton.MockRespond(baseResponse);
      });
    }

  });

  it('should be created', inject([LoginService], (service: LoginService) => {
    expect(service).toBeTruthy();
  }));
});
