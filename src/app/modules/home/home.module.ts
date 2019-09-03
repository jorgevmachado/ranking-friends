import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {CoreModule} from '../../core/core.module';
import {SharedModule} from '../../shared/shared.module';

import { HomeComponent } from './home.component';

const ROUTES: Routes = [
  {
    path: 'home',
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
