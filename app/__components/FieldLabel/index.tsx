type FieldLableProps = {
  htmlFor: string;
  labelName: string;
  required: boolean;
};

export function FieldLable({ htmlFor, labelName, required }: FieldLableProps) {
  return (
    <label
      htmlFor={htmlFor}
      className="block text-xs font-bold text-gray-600 dark:text-white"
    >
      {labelName}
      {required && <span className="text-red-500">*</span>}
    </label>
  );
}
