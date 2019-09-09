import { NgModule } from '@angular/core';
import {PontuacaoModule} from './pontuacao/pontuacao.module';
import {CategoriaModule} from './categoria/categoria.module';

@NgModule({
  imports: [
    PontuacaoModule,
    CategoriaModule
  ],
  exports: [
    PontuacaoModule,
    CategoriaModule
  ],
})
export class ConfiguracaoModule { }
