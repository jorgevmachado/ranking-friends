import {ElementRef, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource, Sort} from '@angular/material';
import {SelectionModel} from '@angular/cdk/collections';
import {ActivatedRoute, Router} from '@angular/router';

import {NotificationService} from '../../core/service/notification.service';

import {Paginator} from '../interface/paginator.interface';
import MESSAGE from '../constant/message.constant';
import {BaseRest} from '../interface/base-rest.interface';
import {PATH} from '../../app.constants';

export abstract class ListAbstract<T> implements OnInit {

  @ViewChild(MatPaginator, undefined) paginator: MatPaginator;
  @ViewChild(MatSort, undefined) sort: MatSort;
  @ViewChild(ElementRef, undefined) input: ElementRef;

  abstract displayedColumns: Array<string>;
  dataSource = new MatTableDataSource<T>();
  resultsLength = 0;
  pageSize = 15;
  pageIndex = 0;
  isLoadingResults = false;
  isfiltring = false;
  filter: any = [];
  order: any = {};
  selection = new SelectionModel<T>(true, []);
  title: string;
  displayFilter = false;

  protected  constructor(
    protected dataService: BaseRest<T>,
    protected notificationService: NotificationService,
    protected route: ActivatedRoute,
    protected router: Router,
    protected endPoint: string
  ) {

  }

  abstract onRemove(data?: T): void;
  abstract onResetFilter(): void;

  selectAll(): void {
    this.dataSource.data.forEach((data: T) => this.selection.select(data));
  }

  deselectAll(): void {
    this.selection.clear();
  }

  onEdit(data?: T): void {
    this.router.navigate([`${this.endPoint}/${
      PATH.ACAO.EDIT.replace(':id', data['id'])
    }`]);
  }

  onDetail(data?: T): void {
    this.router.navigate([`${this.endPoint}/${
      PATH.ACAO.DETAIL.replace(':id', data['id'])
    }`]);
  }

  onAdd(): void {
    this.router.navigate([`${this.endPoint}/${PATH.ACAO.ADD}`]);
  }

  applyFilter(): void {
    this.updateDataSource();
  }

  onFilterToggle() {
    this.displayFilter = !this.displayFilter;
  }

  ngOnInit(): void {
    this.paginator.page.subscribe(this.updateDataSource.bind(this));
    this.updateDataSource();
    this.onReceiveTitle();

  }

  onReceiveTitle(): void {
    this.route.data.subscribe((data: {title}) => {
      this.title = data.title ? 'Lista de ' + data.title : 'Lista sem título';
    });
  }

  sortData(sort: Sort): void {
    this.paginator.pageIndex = 0;
    this.order.field = sort.active;
    this.order.direction = sort.direction;
    this.isLoadingResults = true;
    this.selection.clear();
    this.dataService.getAll(0, this.filter, this.order).subscribe((result: Paginator<T>) => {
      this.dataSource.data = result.data;
      this.pageSize = result.per_page;
      this.resultsLength = result.total;
      this.isLoadingResults = false;
    }, error => {
      this.isLoadingResults = false;
      throw error;
    });
  }

  updateDataSource(data?: any) {
    for (const key in this.filter) {
      if (this.filter[key]) {
        this.isfiltring = true;
      }
    }
    const page = data ? data.pageIndex + 1 : 1;
    this.isLoadingResults = true;
    this.selection.clear();
    this.dataService.getAll(page.toString(), this.filter, this.order)
      .subscribe((result: Paginator<T>) => {
        this.isLoadingResults = false;
        this.dataSource.data = result.data;
        this.pageSize = result.per_page;
        this.resultsLength = result.total;
        if (this.isfiltring && !this.resultsLength) {
          this.notificationService.notify(MESSAGE.FILTER_RESULT_EMPTY);
        }
        this.onComplete(result);
      }, error => {
        this.onComplete(error);
        this.isLoadingResults = false;
        throw error;
      });

  }

  onComplete(response: any): void {}
}
