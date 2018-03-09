import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkoutComponent } from './workout.component';
import { HttpModule,Http, Response, Headers, URLSearchParams, RequestOptions } from '@angular/http';
import { Component, OnInit } from '@angular/core';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { RouterTestingModule } from '@angular/router/testing';
import { WorkoutService } from './workout.service';
import { ServiceUrlProviderService } from '../serviceurlprovider.service';
import { AlertService  } from '../_services/alert.service';
describe('WorkoutComponent', () => {
  let component: WorkoutComponent;
  let fixture: ComponentFixture<WorkoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        imports: [ FormsModule,RouterTestingModule,HttpModule],
        schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers:    [ WorkoutService,
         { provide: WorkoutService, useClass: WorkoutService },
         ServiceUrlProviderService, { provide: ServiceUrlProviderService, useClass: ServiceUrlProviderService},
          AlertService,{ provide: AlertService, useClass: AlertService} ],
      declarations: [ WorkoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});