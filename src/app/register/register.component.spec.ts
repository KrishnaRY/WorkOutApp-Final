import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { RegisterComponent } from './register.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { Component, OnInit } from '@angular/core';
import { RegisterService } from './register.service';
import { ServiceUrlProviderService } from '../serviceurlprovider.service';
describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
       imports: [ FormsModule,RouterTestingModule,HttpModule],
        schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers:    [ RegisterService,
         { provide: RegisterService, useClass: RegisterService },
          ServiceUrlProviderService, { provide: ServiceUrlProviderService, useClass: ServiceUrlProviderService} ],
      declarations: [ RegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

