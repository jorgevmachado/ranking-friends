import {ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {NavOptions} from '../../interface/nav-options.interface';
import {MediaMatcher} from "@angular/cdk/layout";
import {MenuItemsService} from "../../service/menu-items.service";

@Component({
  selector: 'app-sidebar-menu',
  templateUrl: './sidebar-menu.component.html',
  styleUrls: ['./sidebar-menu.component.scss']
})
export class SidebarMenuComponent implements OnDestroy {

  mobileQuery: MediaQueryList;

  private _mobileQueryListener: () => void;

  navOptions: NavOptions[] = [
    {
      label: 'Início',
      routerLink: ['home'],
      icon: 'home'
    }
  ];

  constructor(
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    public menuItems: MenuItemsService
  ) {
    this.mobileQuery = media.matchMedia('(min-width: 768px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

}
