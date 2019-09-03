import {NgModule} from '@angular/core';

import {CoreModule} from '../core/core.module';

import {NotFoundComponent} from './components/not-found/not-found.component';
import { SidebarMenuComponent } from './components/sidebar-menu/sidebar-menu.component';

@NgModule({
  declarations: [NotFoundComponent, SidebarMenuComponent],
  imports: [
    CoreModule
  ],
  exports: [NotFoundComponent, SidebarMenuComponent]
})
export class SharedModule {
}
