import {Component, Input} from '@angular/core';
import {SelectionModel} from '@angular/cdk/collections';

@Component({
  selector: 'app-content-header',
  templateUrl: './content-header.component.html',
  styleUrls: ['./content-header.component.scss']
})
export class ContentHeaderComponent {

  @Input() title?: string;
  @Input() displayTitle ? = true;
  @Input() selection?: SelectionModel<any>;

}
