import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {RouterTestingModule} from '@angular/router/testing';

import {CoreModule} from '../../../core/core.module';
import { SidebarMenuComponent } from './sidebar-menu.component';
import {AccordionAnchorDirective, AccordionDirective, AccordionLinkDirective} from '../../directive/accordion';
import {MenuItemsService} from '../../service/menu-items.service';

describe('Component SidebarMenuComponent: Shared', () => {
  let component: SidebarMenuComponent;
  let fixture: ComponentFixture<SidebarMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        NoopAnimationsModule,
        CoreModule,
        RouterTestingModule.withRoutes([])
      ],
      declarations: [
        SidebarMenuComponent,
        AccordionAnchorDirective,
        AccordionLinkDirective,
        AccordionDirective
      ],
      providers: [
        MenuItemsService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Verifica a criação do Component SidebarMenuComponent: Shared', () => {
    expect(component).toBeTruthy();
  });
});
