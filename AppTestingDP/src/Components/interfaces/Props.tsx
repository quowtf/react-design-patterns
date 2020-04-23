export interface PropsButton {
  navigation?: any;
  route?: string;
  text: string;
}

export interface PropsInput {
  item: string;
  value: string;
  setItem: (item: string, value: string) => void;
}
