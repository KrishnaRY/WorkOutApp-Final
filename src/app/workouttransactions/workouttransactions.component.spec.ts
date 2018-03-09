import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkouttransactionsComponent } from './workouttransactions.component';
import { HttpModule,Http, Response, Headers, URLSearchParams, RequestOptions } from '@angular/http';
import { Component, OnInit } from '@angular/core';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { RouterTestingModule } from '@angular/router/testing';
import { WorkouttransactionsService } from '../workouttransactions/workouttransactions.service';
import { ServiceUrlProviderService } from '../serviceurlprovider.service';
describe('WorkouttransactionsComponent', () => {
  let component: WorkouttransactionsComponent;
  let fixture: ComponentFixture<WorkouttransactionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        imports: [ FormsModule,RouterTestingModule,HttpModule],
        schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers:    [ WorkouttransactionsService,
         { provide: WorkouttransactionsService, useClass: WorkouttransactionsService },
         ServiceUrlProviderService, { provide: ServiceUrlProviderService, useClass: ServiceUrlProviderService} ],
      declarations: [ WorkouttransactionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkouttransactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
