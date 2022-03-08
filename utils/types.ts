export interface Option {
  key: string;
  value: any;
  text: string;
}

export interface CheckBoxProps {
  key: string;
  value: string;
}

export interface ObjectProps {
  [x: string]: any;
}

export interface CxProps {
  className?: string;
}
