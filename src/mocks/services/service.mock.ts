import {Observable, of} from 'rxjs';
import {Paginator} from '../../app/shared/interface/paginator.interface';

export class ServiceMock<T> {

  constructor(
    protected paginate: any
  ) {}
  getAll(page: any, filter?: any, order?: any): Observable<Paginator<T>> {
    return of (this.paginate as Paginator<T>);
  }

  save(data: T): Observable<any> {
    return of({
      success: true,
      message: 'Criado com sucesso.',
      data: []
    });
  }

  update(data: T): Observable<any> {
    return of({
      success: true,
      message: 'Atualizado com sucesso.',
      data: []
    });
  }

  delete(data: T): Observable<any> {
    if (data['id'] === -1) {
      return Observable.create(observer => {
        observer.error({error: {error: true, message: 'Teste de exceção: Delete'}});
        observer.complete();
      });
    }
    return  of({
      success: true,
      message: 'Excluido com sucesso.',
      data: 1
    });
  }
}
