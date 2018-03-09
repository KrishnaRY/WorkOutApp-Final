import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { RouterTestingModule } from '@angular/router/testing';
import { AlertService  } from './_services/alert.service';
import { AlertComponent } from './_directives/index';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
         imports: [RouterTestingModule],
          providers:    [  AlertService,{ provide: AlertService, useClass: AlertService} ],
      declarations: [
        AppComponent,AlertComponent
      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
 });
