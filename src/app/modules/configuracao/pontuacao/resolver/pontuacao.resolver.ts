import {Injectable} from '@angular/core';

import {ResolverAbstract} from '../../../../shared/abstract/resolver.abstract';

import {Pontuacao} from '../interface/pontuacao';
import {PontuacaoService} from '../service/pontuacao.service';

@Injectable()
export class PontuacaoResolver extends ResolverAbstract<Pontuacao> {

  constructor(protected service: PontuacaoService) {
    super(service);
  }
}
