import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PersistComponent } from './persist.component';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {RouterTestingModule} from '@angular/router/testing';

import {CoreModule} from '../../../../../core/core.module';
import {SharedModule} from '../../../../../shared/shared.module';
import {NotificationService} from '../../../../../core/service/notification.service';
import {
  CategoriaServiceMock
} from '../../../../../../mocks/modules/configuracao/categoria/service/categoria.service.mock';

import {CategoriaService} from '../../service/categoria.service';

describe('Component Persistir: Categoria', () => {
  let component: PersistComponent;
  let fixture: ComponentFixture<PersistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        NoopAnimationsModule,
        CoreModule,
        SharedModule,
        RouterTestingModule.withRoutes([])
      ],
      declarations: [ PersistComponent ],
      providers: [
        NotificationService,
        {provide: CategoriaService, useClass: CategoriaServiceMock},

      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Verifica a criação do Component Persistir: Categoria', () => {
    expect(component).toBeTruthy();
  });
});
