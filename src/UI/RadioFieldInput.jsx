function RadioFieldInput({
  label,
  name,
  id,
  value,
  register,
  validationSchema,
  watch,
}) {
  return (
    <div className="flex items-center gap-x-2">
      <input
        type="radio"
        name={name}
        id={id}
        value={value}
        {...register(name, validationSchema)}
        checked={watch(name) === value}
        className="radioField__input"
      />

      <label htmlFor={id} className="cursor-pointer text-secondary-600">
        {label}
      </label>
    </div>
  );
}
export default RadioFieldInput;
