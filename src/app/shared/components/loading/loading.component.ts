import {Component, Input} from '@angular/core';
import {fade, fadeIn} from '../../animations';

@Component({
  selector: 'app-loading',
  template: `<div class="configuration-loading-shade" *ngIf="display" [@fadeIn] [@fade]="display ? 'show' : 'hide'">
    <mat-spinner></mat-spinner>
  </div>
  `,
  animations: [fade, fadeIn]
})
export class LoadingComponent {
  @Input() display: boolean;
}
