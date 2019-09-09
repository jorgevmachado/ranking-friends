import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {RouterTestingModule} from '@angular/router/testing';

import {PontuacaoServiceMock} from '../../../../../../mocks/modules/configuracao/pontuacao/service/pontuacao.service.mock';
import {CoreModule} from '../../../../../core/core.module';
import {NotificationService} from '../../../../../core/service/notification.service';
import {SharedModule} from '../../../../../shared/shared.module';

import {PontuacaoService} from '../../service/pontuacao.service';
import { PersistComponent } from './persist.component';

describe('Component Persistir: Pontuacao', () => {
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
        {provide: PontuacaoService, useClass: PontuacaoServiceMock}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Verifica a criação do Component Persistir: Pontuacao', () => {
    expect(component).toBeTruthy();
  });
});
