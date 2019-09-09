import {Injectable} from '@angular/core';
import {ServiceMock} from '../../../../services/service.mock';
import {Pontuacao} from '../../../../../app/modules/configuracao/pontuacao/interface/pontuacao';
import {PontuacaoPaginateMock} from '../pontuacao-paginate.mock';

@Injectable()
export class PontuacaoServiceMock extends ServiceMock<Pontuacao> {

  constructor() {
    super(PontuacaoPaginateMock);
  }
}
