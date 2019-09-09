import {Injectable} from '@angular/core';

import {ResolverAbstract} from '../../../../shared/abstract/resolver.abstract';

import {Categoria} from '../interface/categoria.interface';
import {CategoriaService} from '../service/categoria.service';

@Injectable()
export class CategoriaResolver extends ResolverAbstract<Categoria> {

  constructor(protected service: CategoriaService) {
    super(service);
  }
}
