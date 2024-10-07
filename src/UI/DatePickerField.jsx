import DatePicker from "react-multi-date-picker";
import "react-multi-date-picker/styles/backgrounds/bg-dark.css";

function DatePickerField({
  label,
  name,
  date,
  setDate,
  calender,
  locale,
  format,
}) {
  const isDarkMode = JSON.parse(localStorage.getItem("isDarkMode"));

  return (
    <div>
      <label htmlFor={name} className="mb-2 text-secondary-600">
        {label}
      </label>

      <DatePicker
        name={name}
        id={name}
        value={date}
        onChange={setDate}
        calendar={calender}
        locale={locale}
        format={format}
        containerClassName="w-full"
        inputClass="textField__input"
        calendarPosition="top-center"
        className={isDarkMode ? "bg-dark" : ""}
      />
    </div>
  );
}
export default DatePickerField;
