export type Menu = {
  id: number;
  ar_title: string;
  en_title: string;
  path?: string;
  newTab: boolean;
  submenu?: Menu[];
};
