import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import {NoopAnimationsModule} from "@angular/platform-browser/animations";
import {CoreModule} from "../../core/core.module";
import {SharedModule} from "../../shared/shared.module";
import {RouterTestingModule} from "@angular/router/testing";

describe('Component HomeComponent: Home', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        NoopAnimationsModule,
        CoreModule,
        SharedModule,
        RouterTestingModule.withRoutes([])
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

  it('Verifica a criação do component HomeComponent: Home', () => {
    expect(component).toBeTruthy();
  });
});
