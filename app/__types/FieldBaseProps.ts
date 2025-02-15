interface BaseProps {
  id: string;
  required?: boolean;
}

interface LabeledProps {
  labeled?: true;
  labelName: string;
}

interface UnlabeledProps {
  labeled: false;
  labelName?: never;
}
export type FiledBaseProps = BaseProps & (LabeledProps | UnlabeledProps);
