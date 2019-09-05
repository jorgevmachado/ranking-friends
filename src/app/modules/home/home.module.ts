import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {CoreModule} from '../../core/core.module';
import {SharedModule} from '../../shared/shared.module';

import { HomeComponent } from './home.component';
import {PATH} from '../../app.constants';

const ROUTES: Routes = [
  {
    path: PATH.HOME,
    data: {
      title: 'Home',
    },
    children: [
      {
        path: '',
        component: HomeComponent
      }
    ]
  }
];

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CoreModule,
    SharedModule,
    RouterModule.forRoot(ROUTES),
  ]
})
export class HomeModule { }
