import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { LoginComponent } from './login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { LoginService } from './login.service';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule,Router } from '@angular/router';
import { User } from '../_model/user';
import { ServiceUrlProviderService } from '../serviceurlprovider.service';
import { AlertService  } from '../_services/alert.service';
describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
       imports: [ FormsModule,RouterTestingModule,HttpModule,RouterModule],
         schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
         providers:[ LoginService,
         { provide: LoginService, useClass: LoginService },
         ServiceUrlProviderService, { provide: ServiceUrlProviderService, useClass: ServiceUrlProviderService },
          AlertService,{ provide: AlertService, useClass: AlertService}
         ],
      declarations: [ LoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
