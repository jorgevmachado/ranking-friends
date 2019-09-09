import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {MatDialog} from '@angular/material';

import {PATH} from '../../../../../app.constants';
import {NotificationService} from '../../../../../core/service/notification.service';
import {ListAbstract} from '../../../../../shared/abstract/list.abstract';
import {DialogComponent} from '../../../../../shared/components/dialog/dialog.component';
import MESSAGE from '../../../../../shared/constant/message.constant';
import {fade, fadeIn, openClose} from '../../../../../shared/animations';

import {Categoria} from '../../interface/categoria.interface';
import {CategoriaService} from '../../service/categoria.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  animations: [openClose, fade, fadeIn]
})
export class ListComponent extends ListAbstract<Categoria> implements OnInit {

  displayedColumns: Array<string> = [
    'no_categoria',
    'ds_categoria',
    'actions'
  ];

  constructor(
    protected service: CategoriaService,
    protected notificationService: NotificationService,
    protected route: ActivatedRoute,
    protected router: Router,
    protected dialog: MatDialog
  ) {
    super(service, notificationService, route, router, PATH.CATEGORIA);
  }

  ngOnInit() {
    super.ngOnInit();
  }

  onRemove(data?: Categoria): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      data: {
        confirmLabel: 'Sim',
        confirmColor: 'primary',
        cancelLabel: 'Não',
        title: 'Deseja excluir a categoria selecionada?'
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
