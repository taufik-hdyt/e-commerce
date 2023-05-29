export interface ISearch {
  title?: string;
  onClear?: () => void;
  onSearch?: (value: string) => void;
}
