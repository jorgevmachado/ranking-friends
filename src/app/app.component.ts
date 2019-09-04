import {AfterViewInit, ChangeDetectorRef, Component, Inject, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {MediaObserver} from '@angular/flex-layout';
import {Title} from '@angular/platform-browser';
import {LOCAL_STORAGE, WebStorageService} from 'angular-webstorage-service';

import {fadeIn} from './shared/animations';
import {MediaMatcher} from '@angular/cdk/layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [fadeIn]
})
export class AppComponent implements OnDestroy, OnInit, AfterViewInit {

  mobileQuery: MediaQueryList;
  private mobileQueryListener: () => void;

  isLoading = true;

  constructor(
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
  ) {
    this.mobileQuery = media.matchMedia('(min-width: 768px)');
    this.mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this.mobileQueryListener);
    this.isLoading = false;
  }

  ngAfterViewInit(): void {
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this.mobileQueryListener);
  }

  ngOnInit(): void {
  }
}
