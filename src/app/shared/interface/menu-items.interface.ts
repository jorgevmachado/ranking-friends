export interface Menu {
  routerLink?: string;
  label: string;
  type?: string;
  icon?: string;
  children?: Menu[];
  badge?: [{
      type: string;
      value?: string;
  }];
}
