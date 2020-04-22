export interface PropsButton {
  navigation?: any;
  // route?: {key?: string; name?: string; params?: any};
  route?: string;
  item?: string;
  value?: any;
  text: string;
  setItem?: (item: string, value: any) => void;
}

export interface PropsInput {
  item: string;
  value: string;
  setItem: (item: string, value: string) => void;
}
