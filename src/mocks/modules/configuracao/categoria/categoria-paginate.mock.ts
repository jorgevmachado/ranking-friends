import {Paginator} from '../../../../app/shared/interface/paginator.interface';
import {Categoria} from '../../../../app/modules/configuracao/categoria/interface/categoria.interface';
import {CategoriaShowMock1, CategoriaShowMock2, CategoriaShowMock3, CategoriaShowMock4} from './categoria-show.mock';

export const CategoriaPaginateMock: Paginator<Categoria> = {
  page: 1,
  per_page: 15,
  total: 1,
  total_pages: 1,
  data: [
    CategoriaShowMock1,
    CategoriaShowMock2,
    CategoriaShowMock3,
    CategoriaShowMock4,
  ]
};
