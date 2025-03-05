import { FiledBaseProps } from "@/app/__types/FieldBaseProps";
import { FieldLable } from "../FieldLabel";

export function SelectBox({
  id,
  placeholder,
  selectedOption,
  onChange,
  options,
  labeled = true,
  labelName,
  required = false,
}: SelectBoxProps) {
  return (
    <div>
      {labeled && (
        <FieldLable
          htmlFor={id}
          labelName={labelName as string}
          required={required}
        />
      )}
      <select
        id={id}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        value={selectedOption}
        onChange={onChange}
      >
        <option value="" disabled>
          -- {placeholder} --
        </option>
        {options.map((x) => {
          return (
            <option value={x.value} key={x.value}>
              {x.label}
            </option>
          );
        })}
      </select>
    </div>
  );
}

type SelectBoxProps = FiledBaseProps & SpecificProps;

interface SpecificProps {
  placeholder: string;
  options: OptionsProps[];
  // it should be literal type, if needed
  selectedOption: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

interface OptionsProps {
  label: string;
  value?: string;
}
