import { Component } from '@angular/core';

import {PersistAbstract} from '../../../../../shared/abstract/persist.abstract';
import {Categoria} from '../../interface/categoria.interface';
import MESSAGE from '../../../../../shared/constant/message.constant';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

import {NotificationService} from '../../../../../core/service/notification.service';
import {fade, fadeIn} from '../../../../../shared/animations';
import {PATH} from '../../../../../app.constants';

import {CategoriaService} from '../../service/categoria.service';

@Component({
  selector: 'app-persist',
  templateUrl: './persist.component.html',
  animations: [fade, fadeIn]
})
export class PersistComponent extends PersistAbstract<Categoria> {

  message = MESSAGE;
  constructor(
    protected service: CategoriaService,
    protected notificationService: NotificationService,
    protected route: ActivatedRoute,
    protected router: Router,
    private fb: FormBuilder,
  ) {
    super(service, notificationService, route, router, PATH.CATEGORIA);
  }

  formInit(): FormGroup {
    return this.fb.group({
      no_categoria: this.fb.control('', Validators.required),
      ds_categoria: this.fb.control('', Validators.required),
    });
  }

}
