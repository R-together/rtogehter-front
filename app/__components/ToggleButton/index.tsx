import { FiledBaseProps } from "@/app/__types/FieldBaseProps";
import { FieldLable } from "../FieldLabel";

export function ToggleButton({
  id,
  isChecked,
  onChange,
  labeled = true,
  labelName,
  required = false,
}: ToggleButtonProps) {
  return (
    <div>
      {labeled && (
        <FieldLable
          htmlFor={id}
          labelName={labelName as string}
          required={required}
        />
      )}
      <label className="relative inline-block w-16 h-8">
        <input
          type="checkbox"
          className="sr-only peer"
          checked={isChecked}
          onChange={onChange}
        />
        <div className="absolute inset-0 bg-gray-200 rounded-full peer-checked:bg-gray-500 transition-colors"></div>
        <div className="absolute top-1 left-1 w-6 h-6 bg-white rounded-full border border-gray-300 transition-transform peer-checked:translate-x-8"></div>
      </label>
    </div>
  );
}

type ToggleButtonProps = FiledBaseProps & {
  isChecked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
