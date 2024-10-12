function SelectOption({ value, onChange, options }) {
  return (
    <select
      value={value}
      onChange={onChange}
      className="rounded-md border-l-8 border-l-transparent bg-secondary-0 p-2 text-secondary-900 outline outline-1 outline-secondary-300 transition-all duration-300 hover:outline-primary-500 focus:outline-primary-500"
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}
export default SelectOption;
