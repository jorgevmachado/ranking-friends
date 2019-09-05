import {NgModule} from '@angular/core';

import {CoreModule} from '../core/core.module';

import {AccordionAnchorDirective, AccordionDirective, AccordionLinkDirective} from './directive/accordion';
import {MenuItemsService} from './service/menu-items.service';
import {NotFoundComponent} from './components/not-found/not-found.component';
import { SidebarMenuComponent } from './components/sidebar-menu/sidebar-menu.component';
import { RouterOutletComponent } from './components/router-outlet/router-outlet.component';
import { ContentHeaderComponent } from './components/content-header/content-header.component';
import { DialogComponent } from './components/dialog/dialog.component';
import { SendEventComponent } from './components/send-event/send-event.component';
import { LoadingComponent } from './components/loading/loading.component';

@NgModule({
  declarations: [
    NotFoundComponent,
    SidebarMenuComponent,
    AccordionAnchorDirective,
    AccordionLinkDirective,
    AccordionDirective,
    RouterOutletComponent,
    ContentHeaderComponent,
    DialogComponent,
    SendEventComponent,
    LoadingComponent
  ],
  imports: [
    CoreModule
  ],
  exports: [
    NotFoundComponent,
    SidebarMenuComponent,
    AccordionAnchorDirective,
    AccordionLinkDirective,
    AccordionDirective,
    ContentHeaderComponent,
    DialogComponent,
    SendEventComponent,
    LoadingComponent
  ],
  entryComponents: [
    DialogComponent,
    SendEventComponent
  ],
  providers: [
    MenuItemsService
  ]
})
export class SharedModule {
}
