import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {PATH} from '../../../app.constants';
import {CoreModule} from '../../../core/core.module';
import {RouterOutletComponent} from '../../../shared/components/router-outlet/router-outlet.component';
import {SharedModule} from '../../../shared/shared.module';

import { ListComponent } from './component/list/list.component';
import { PersistComponent } from './component/persist/persist.component';
import {PontuacaoService} from './service/pontuacao.service';
import {PontuacaoResolver} from './resolver/pontuacao.resolver';

const ROUTES: Routes = [
  {
    path: PATH.PONTUACAO,
    data: {
      title: 'Configuração',
      breadcrumb: 'Configuração',
    },
    children: [
      {
        path: '',
        component: RouterOutletComponent,
        data: {
          title: 'Pontuação',
          breadcrumb: 'Pontuação',
        },
        children: [
          {
            path: '',
            component: ListComponent,
            data: {
              title: 'Pontuação',
              breadcrumb: 'Listar',
            },
          },
          {
            path: PATH.ACAO.ADD,
            component: PersistComponent,
            data: {
              title: 'Pontuação',
              breadcrumb: 'Cadastrar',
            },
          },
          {
            path: PATH.ACAO.EDIT,
            component: PersistComponent,
            data: {
              title: 'Pontuação',
              breadcrumb: 'Alterar',
            },
            resolve: {
              responseData: PontuacaoResolver
            }
          }
        ]
      }
    ]
  }
];

@NgModule({
  declarations: [ListComponent, PersistComponent],
  imports: [
    CoreModule,
    SharedModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [
    PontuacaoService,
    PontuacaoResolver
  ]
})
export class PontuacaoModule { }
