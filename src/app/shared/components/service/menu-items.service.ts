import {Injectable} from '@angular/core';
import {Menu} from '../../interface/menu-items.interface';

const MENU: Menu[] = [
  {
    state: 'home',
    name: 'Home',
    type: 'link',
    icon: 'av_timer'
  },
  {
    state: 'pais',
    name: 'País',
    type: 'link',
    icon: 'av_timer'
  },
  {
    state: 'estado',
    name: 'Estado',
    type: 'link',
    icon: 'av_timer'
  },
];

@Injectable()
export class MenuItemsService {
  getMenuitem(): Menu[] {
    return MENU;
  }
}
