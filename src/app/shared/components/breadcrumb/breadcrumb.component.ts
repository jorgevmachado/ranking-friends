import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {Subscription} from 'rxjs';

import {BreadCrumb} from '../../interface/breadcrumb.interface';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit, OnDestroy {

  breadcrumbs: Array<BreadCrumb> = [];
  subscription: Subscription;

  constructor(
    protected activatedRoute: ActivatedRoute,
    protected router: Router
  ) {
    this.subscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.breadcrumbs = this.buildBreadCrumb(this.activatedRoute.root);
      }
    });
  }

  ngOnInit(): void {
    this.breadcrumbs = this.buildBreadCrumb(this.activatedRoute.root);
  }

  buildBreadCrumb(route: ActivatedRoute, url: string = '', breadcrumbs: Array<BreadCrumb> = []): Array<BreadCrumb> {
    let label   = 'Início';
    let path    = '';
    let nextUrl = url;

    const breadcrumb     = {label: label, url: nextUrl} as BreadCrumb;
    const newBreadcrumbs = [...breadcrumbs, breadcrumb];
    return newBreadcrumbs;
  }

  private changePath(path) {

  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
