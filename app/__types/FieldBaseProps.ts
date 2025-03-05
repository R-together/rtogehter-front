interface BaseProps {
  // id props is used to connect to label and labeled componenent
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
