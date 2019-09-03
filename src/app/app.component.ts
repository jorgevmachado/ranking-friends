import {AfterViewInit, ChangeDetectorRef, Component, Inject, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {MediaObserver} from '@angular/flex-layout';
import {Title} from '@angular/platform-browser';
import {LOCAL_STORAGE, WebStorageService} from 'angular-webstorage-service';

import {fadeIn} from './shared/animations';
import {MatSidenav} from '@angular/material';
import {Subscription} from "rxjs";
import {MediaMatcher} from "@angular/cdk/layout";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [fadeIn]
})
export class AppComponent implements OnDestroy, OnInit, AfterViewInit {

  @ViewChild('drawer', undefined) drawer: MatSidenav;
  subscription: Subscription;
  isLoading = true;
  isLoadingRouter = false;
  isMobileView = false;
  displayNav = true;
  isMenuOpen = true;
  title = 'ranking-friends';

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private media: MediaObserver,
    private titleService: Title,
    @Inject(LOCAL_STORAGE) private storage: WebStorageService
  ) {
    this.isLoading = false;
  }

  ngAfterViewInit(): void {
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit(): void {
  }

  toggleMenu() {
    this.drawer.toggle();
    this.isMenuOpen = !this.isMenuOpen;
    this.storage.set('menu_open', this.isMenuOpen);
  }
}
