import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { RouterTestingModule } from '@angular/router/testing';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { LoginService } from '../login/login.service';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule,Router } from '@angular/router';
import { User } from '../_model/user';
describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
       imports: [ FormsModule,RouterTestingModule,HttpModule,RouterModule],
         schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
         providers:[ LoginService,
         { provide: LoginService, useClass: LoginService }
         
         ],
      declarations: [ HomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
