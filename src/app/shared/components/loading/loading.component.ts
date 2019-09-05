import {Component, Input} from '@angular/core';
import {fade, fadeIn} from '../../animations';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  animations: [fade, fadeIn]
})
export class LoadingComponent {
  @Input() display: boolean;
}
