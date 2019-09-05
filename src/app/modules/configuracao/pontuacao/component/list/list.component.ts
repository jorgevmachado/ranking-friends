import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {MatDialog} from '@angular/material';

import {fade, fadeIn, openClose} from '../../../../../shared/animations';
import {ListAbstract} from '../../../../../shared/abstract/list.abstract';
import {NotificationService} from '../../../../../core/service/notification.service';
import {DialogComponent} from '../../../../../shared/components/dialog/dialog.component';
import {PATH} from '../../../../../app.constants';
import MESSAGE from '../../../../../shared/constant/message.constant';

import {Pontuacao} from '../../interface/pontuacao';
import {PontuacaoService} from '../../service/pontuacao.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  animations: [openClose, fade, fadeIn]
})
export class ListComponent extends ListAbstract<Pontuacao> implements OnInit {

  displayedColumns: Array<string> = [
    'nr_pontuacao',
    'ds_pontuacao',
    'actions'
  ];

  constructor(
    protected service: PontuacaoService,
    protected notificationService: NotificationService,
    protected route: ActivatedRoute,
    protected router: Router,
    protected dialog: MatDialog
  ) {
    super(service, notificationService, route, router, PATH.PONTUACAO);
  }

  ngOnInit() {
    super.ngOnInit();
  }

  onRemove(data?: Pontuacao): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      data: {
        confirmLabel: 'Sim',
        confirmColor: 'primary',
        cancelLabel: 'Não',
        title: 'Deseja excluir a pontuação selecionada?'
      }
    });
    dialogRef.afterClosed().subscribe(action => {
      if (action) {
        this.isLoadingResults = true;
        this.service.delete(data).subscribe(result => {
          this.notificationService.notify(MESSAGE.DELETE_SUCCESS);
          this.updateDataSource();
          this.isLoadingResults = false;
        }, error => {
          this.notificationService.notify(error.error.message);
          this.isLoadingResults = false;
        });
      }
    });
  }

  onResetFilter(): void {
  }

}
