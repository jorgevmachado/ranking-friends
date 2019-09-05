import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

import {BaseRest} from '../interface/base-rest.interface';
import {Paginator} from '../interface/paginator.interface';
import {BaseJson} from '../interface/base-json.interface';

import {API_BASE} from '../../app.constants';

export abstract class HttpDataAbstract<T> implements BaseRest<T> {

  protected constructor(protected http: HttpClient, protected endPoint: string) {

  }

  getAll(page: any, filter?: any, order?: any): Observable<Paginator<T>> {
    const params = {
      page,
      filter: JSON.stringify(filter) || '',
      order: JSON.stringify(order) || '',
    };
    return this.http.get<Paginator<T>>(`${API_BASE}/${this.endPoint}`, {params});
  }

  getById(id: any): Observable<BaseJson<T>> {
    return this.http.get<BaseJson<T>>(`${API_BASE}/${this.endPoint}/${id}`);
  }

  save(data: T): Observable<T> {
    return this.http.post<T>(`${API_BASE}/${this.endPoint}`, data);
  }

  update(data: T): Observable<T> {
    return this.http.put<T>(`${API_BASE}/${this.endPoint}/${data['id']}`, data);
  }

  delete(data: T): Observable<T> {
    return this.http.delete<T>(`${API_BASE}/${this.endPoint}/${data['id']}`);
  }

  transformData(type: any, data: any) {
    return {
      type: JSON.stringify(data)
    };
  }
}
