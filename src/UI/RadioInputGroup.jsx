import RadioFieldInput from "./RadioFieldInput";

function RadioInputGroup({ register, watch, errors, configs }) {
  const { name, validationSchema = {}, options } = configs;

  return (
    <div>
      <div className="flex items-center justify-center gap-x-10">
        {options.map((option) => (
          <RadioFieldInput
            key={option.value}
            label={option.label}
            value={option.value}
            id={option.value}
            name={name}
            register={register}
            watch={watch}
            validationSchema={validationSchema}
          />
        ))}
      </div>

      {errors && errors[name] && (
        <span className="mt-2 block text-sm text-error">
          {errors[name]?.message}
        </span>
      )}
    </div>
  );
}
export default RadioInputGroup;
