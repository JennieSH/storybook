export enum ButtonSize {
  SM = "sm",
  MD = "md",
  LG = "lg",
}

export interface ButtonProps {
  background: string;
  title: string;
  size: string;
  rounded: boolean;
}
