import {Injectable} from '@angular/core';
import {Menu} from '../interface/menu-items.interface';

import {PATH} from '../../app.constants';

const MENU: Menu[] = [
  {
    routerLink: PATH.HOME,
    label: 'Home',
    type: 'link',
    icon: 'av_timer'
  },
  {
    routerLink: PATH.CADASTRO,
    label: 'Cadastrar amigos',
    type: 'link',
    icon: 'people'
  },
  {
    label: 'Configuração',
    icon: 'settings',
    children: [
      {
        routerLink: PATH.PONTUACAO,
        label: 'Pontuação',
        type: 'link',
        icon: 'plus_one',
      },
      {
        routerLink: PATH.CATEGORIA,
        label: 'Categoria',
        type: 'link',
        icon: 'category',
      },
    ]
  },
];

@Injectable()
export class MenuItemsService {
  getMenuitem(): Menu[] {
    return MENU;
  }
}
