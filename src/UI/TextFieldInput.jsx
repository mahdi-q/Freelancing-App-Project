function TextFieldInput({ label, name, value, onChange }) {
  return (
    <div>
      <label className="mb-2 text-secondary-600" htmlFor={name}>
        {label}
      </label>

      <input
        value={value}
        onChange={onChange}
        id={name}
        name={name}
        className="textField__input"
        type="text"
        autoComplete="off"
      />
    </div>
  );
}
export default TextFieldInput;
