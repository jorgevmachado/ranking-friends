import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {PATH} from '../../../../app.constants';
import {HttpDataAbstract} from '../../../../shared/abstract/http-data.abstract';

import {Pontuacao} from '../interface/pontuacao';

@Injectable()
export class PontuacaoService extends HttpDataAbstract<Pontuacao> {

  constructor(protected http: HttpClient) {
    super(http, PATH.PONTUACAO);
  }
}
