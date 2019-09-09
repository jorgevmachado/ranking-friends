import {Pontuacao} from '../../../../app/modules/configuracao/pontuacao/interface/pontuacao';
import {Paginator} from '../../../../app/shared/interface/paginator.interface';
import {PontuacaoShowMock1, PontuacaoShowMock2, PontuacaoShowMock3, PontuacaoShowMock4} from './pontuacao-show.mock';

export const PontuacaoPaginateMock: Paginator<Pontuacao> = {
  page: 1,
  per_page: 15,
  total: 1,
  total_pages: 1,
  data: [
    PontuacaoShowMock1,
    PontuacaoShowMock2,
    PontuacaoShowMock3,
    PontuacaoShowMock4,
  ]
};
