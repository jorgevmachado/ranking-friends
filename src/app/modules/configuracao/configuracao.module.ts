import { NgModule } from '@angular/core';
import {PontuacaoModule} from './pontuacao/pontuacao.module';

@NgModule({
  imports: [
    PontuacaoModule
  ],
  exports: [
    PontuacaoModule
  ],
})
export class ConfiguracaoModule { }
