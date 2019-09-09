import {Injectable} from '@angular/core';
import {Categoria} from '../../../../../app/modules/configuracao/categoria/interface/categoria.interface';
import {ServiceMock} from '../../../../services/service.mock';
import {CategoriaPaginateMock} from '../categoria-paginate.mock';

@Injectable()
export class CategoriaServiceMock extends ServiceMock<Categoria> {
  constructor() {
    super(CategoriaPaginateMock);
  }
}
