import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve} from '@angular/router';

import {BaseJson} from '../interface/base-json.interface';
import {BaseRest} from '../interface/base-rest.interface';

@Injectable()
export abstract class ResolverAbstract<T> implements Resolve<BaseJson<T>> {

  protected constructor(private dataService: BaseRest<T>) {
  }

  resolve(route: ActivatedRouteSnapshot) {
    return new Promise<BaseJson<T>>(resolve => {
      this.dataService.getById(route.params.id).subscribe(data => resolve(data));
    });
  }
}
