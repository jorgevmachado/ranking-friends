import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {NavOptions} from "../../interface/nav-options.interface";

@Component({
  selector: 'app-sidebar-menu',
  templateUrl: './sidebar-menu.component.html',
  styleUrls: ['./sidebar-menu.component.css']
})
export class SidebarMenuComponent implements OnInit {

  navOptions: NavOptions[] = [
    {
      label: 'Início',
      routerLink: ['home'],
      icon: 'home'
    }
  ];

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
