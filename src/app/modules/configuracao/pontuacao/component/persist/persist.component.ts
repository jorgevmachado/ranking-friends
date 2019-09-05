import { Component } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

import {PATH} from '../../../../../app.constants';
import {NotificationService} from '../../../../../core/service/notification.service';
import {PersistAbstract} from '../../../../../shared/abstract/persist.abstract';
import {fade, fadeIn} from '../../../../../shared/animations';
import MESSAGE from '../../../../../shared/constant/message.constant';

import {Pontuacao} from '../../interface/pontuacao';
import {PontuacaoService} from '../../service/pontuacao.service';


@Component({
  selector: 'app-persist',
  templateUrl: './persist.component.html',
  styleUrls: ['./persist.component.css'],
  animations: [fade, fadeIn]
})
export class PersistComponent extends PersistAbstract<Pontuacao> {

  message = MESSAGE;
  constructor(
    protected service: PontuacaoService,
    protected notificationService: NotificationService,
    protected route: ActivatedRoute,
    protected router: Router,
    private fb: FormBuilder,
  ) {
    super(service, notificationService, route, router, PATH.PONTUACAO);
  }

  formInit(): FormGroup {
    return this.fb.group({
      nr_pontuacao: this.fb.control('', [
        Validators.required,
        Validators.maxLength(9)
      ]),
      ds_pontuacao: this.fb.control('', Validators.required),
    });
  }

}
