import {Observable} from 'rxjs';

import {Paginator} from './paginator.interface';
import {BaseJson} from './base-json.interface';

export interface BaseRest<T> {

  getAll(page: any, filter?: any, order?: any): Observable<Paginator<T>>;

  getById(id: any): Observable<BaseJson<T>>;

  save(data: T): Observable<T>;

  update(data: T): Observable<T>;

  delete(data: T): Observable<T>;
}
