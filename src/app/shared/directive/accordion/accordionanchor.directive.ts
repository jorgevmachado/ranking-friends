import {Directive, HostListener} from '@angular/core';

import {AccordionLinkDirective} from './accordionlink.directive';

@Directive({
  selector: '[appAccordionToggle]'
})
export class AccordionAnchorDirective {

  protected navlink: AccordionLinkDirective;


  constructor(navlink: AccordionLinkDirective) {
    this.navlink = navlink;
  }

  @HostListener('click', ['$event'])
  onClick(e: any) {
    this.navlink.toggle();
  }
}
