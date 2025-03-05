export function BasicButton({ theme, buttonLabel, onClick }: BasicButtonProps) {
  const lightThemeStyles =
    "text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700";
  const darkThemeStyles =
    "text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700";
  return (
    <div>
      <button
        type="button"
        className={theme === "light" ? lightThemeStyles : darkThemeStyles}
        onClick={onClick}
      >
        {buttonLabel}
      </button>
    </div>
  );
}

type BasicButtonProps = {
  theme: string;
  buttonLabel: string;
  onClick: () => void;
};
