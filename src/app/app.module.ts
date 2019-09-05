import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';

import {CoreModule} from './core/core.module';
import {SharedModule} from './shared/shared.module';
import {NotFoundComponent} from './shared/components/not-found/not-found.component';

import { AppComponent } from './app.component';
import {HomeModule} from './modules/home/home.module';
import {StorageServiceModule} from 'angular-webstorage-service';
import {ConfiguracaoModule} from './modules/configuracao/configuracao.module';

export const ROUTES: Routes = [
  {
    path: '', children: [
      {path: '', redirectTo: 'home', pathMatch: 'full'},
      {path: '**', component: NotFoundComponent}
    ]
  },
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    StorageServiceModule,
    SharedModule,
    CoreModule.forRoot(),
    RouterModule.forRoot(ROUTES, {preloadingStrategy: PreloadAllModules}),
    HomeModule,
    ConfiguracaoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
