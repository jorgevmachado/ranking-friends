import {NgModule} from '@angular/core';

import {CoreModule} from '../core/core.module';

import {NotFoundComponent} from './components/not-found/not-found.component';
import { SidebarMenuComponent } from './components/sidebar-menu/sidebar-menu.component';
import {AccordionAnchorDirective, AccordionDirective, AccordionLinkDirective} from './directive/accordion';
import {MenuItemsService} from './components/service/menu-items.service';

@NgModule({
  declarations: [
    NotFoundComponent,
    SidebarMenuComponent,
    AccordionAnchorDirective,
    AccordionLinkDirective,
    AccordionDirective
  ],
  imports: [
    CoreModule
  ],
  exports: [
    NotFoundComponent,
    SidebarMenuComponent,
    AccordionAnchorDirective,
    AccordionLinkDirective,
    AccordionDirective
  ],
  providers: [
    MenuItemsService
  ]
})
export class SharedModule {
}
