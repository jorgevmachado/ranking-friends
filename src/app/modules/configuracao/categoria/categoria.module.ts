import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {CoreModule} from '../../../core/core.module';
import {SharedModule} from '../../../shared/shared.module';
import {RouterOutletComponent} from '../../../shared/components/router-outlet/router-outlet.component';
import {PATH} from '../../../app.constants';

import { PersistComponent } from './component/persist/persist.component';
import { ListComponent } from './component/list/list.component';
import {CategoriaService} from './service/categoria.service';
import {CategoriaResolver} from './resolver/categoria.resolver';

const ROUTES: Routes = [
  {
    path: PATH.CATEGORIA,
    data: {
      title: 'Configuração',
      breadcrumb: 'Configuração',
    },
    children: [
      {
        path: '',
        component: RouterOutletComponent,
        data: {
          title: 'Categoria',
          breadcrumb: 'Categoria',
        },
        children: [
          {
            path: '',
            component: ListComponent,
            data: {
              title: 'Categoria',
              breadcrumb: 'Listar',
            },
          },
          {
            path: PATH.ACAO.ADD,
            component: PersistComponent,
            data: {
              title: 'Categoria',
              breadcrumb: 'Cadastrar',
            },
          },
          {
            path: PATH.ACAO.EDIT,
            component: PersistComponent,
            data: {
              title: 'Categoria',
              breadcrumb: 'Alterar',
            },
            resolve: {
              responseData: CategoriaResolver
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
    CategoriaService,
    CategoriaResolver
  ]
})
export class CategoriaModule { }
