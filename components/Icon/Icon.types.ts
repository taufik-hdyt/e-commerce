export interface IIcon extends React.HTMLAttributes<HTMLDivElement> {
  readonly name?: string;
  readonly size?: number;
  readonly color?: string;
  readonly isStroke?: boolean;
  readonly isSimple?: boolean;
}
