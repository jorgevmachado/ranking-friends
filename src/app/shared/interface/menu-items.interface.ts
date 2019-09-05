export interface Menu {
  state: string;
  name: string;
  type: string;
  icon: string;
  value?: string;
  badge?: Menu[];
}
