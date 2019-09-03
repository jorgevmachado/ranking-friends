import { Component, OnInit } from '@angular/core';
import {fadeIn} from '../../shared/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  animations: [fadeIn]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
