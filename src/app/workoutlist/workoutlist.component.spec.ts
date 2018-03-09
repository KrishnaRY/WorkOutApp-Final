import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { WorkoutlistComponent } from './workoutlist.component';
import { HttpModule,Http, Response, Headers, URLSearchParams, RequestOptions } from '@angular/http';
import { Component, OnInit } from '@angular/core';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { RouterTestingModule } from '@angular/router/testing';
import { WorkoutService } from '../workout/workout.service';
import { ServiceUrlProviderService } from '../serviceurlprovider.service';
describe('WorkoutlistComponent', () => {
  let component: WorkoutlistComponent;
  let fixture: ComponentFixture<WorkoutlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        imports: [ FormsModule,RouterTestingModule,HttpModule],
        schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers:    [ WorkoutService,
         { provide: WorkoutService, useClass: WorkoutService },
         ServiceUrlProviderService,{ provide: ServiceUrlProviderService, useClass: ServiceUrlProviderService} ],
      declarations: [ WorkoutlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkoutlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
