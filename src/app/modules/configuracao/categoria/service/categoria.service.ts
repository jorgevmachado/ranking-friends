import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {PATH} from '../../../../app.constants';
import {HttpDataAbstract} from '../../../../shared/abstract/http-data.abstract';

import {Categoria} from '../interface/categoria.interface';

@Injectable()
export class CategoriaService extends HttpDataAbstract<Categoria> {


  constructor(protected http: HttpClient) {
    super(http, PATH.CATEGORIA);
  }
}
