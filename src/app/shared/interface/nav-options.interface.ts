export interface NavOptions {
  label: string;
  routerLink: Array<string>;
  icon: string;
  children?: NavOptions[];
}
