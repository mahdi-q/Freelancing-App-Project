function TextFieldInput({
  label,
  name,
  register,
  validationSchema,
  errors,
  required,
  type = "text",
}) {
  return (
    <div>
      <label className="mb-2 text-secondary-600" htmlFor={name}>
        {label} {required && <span className="text-error">*</span>}
      </label>

      <input
        {...register(name, validationSchema)}
        type={type}
        id={name}
        autoComplete="off"
        className="textField__input"
      />

      {errors && errors[name] && (
        <span className="block mt-2 text-sm text-error">
          {errors[name]?.message}
        </span>
      )}
    </div>
  );
}
export default TextFieldInput;
