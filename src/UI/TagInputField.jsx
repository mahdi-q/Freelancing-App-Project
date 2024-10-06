import { TagsInput } from "react-tag-input-component";

function TagInputField({ label, name, value, onChange }) {
  return (
    <div>
      <label className="mb-2 text-secondary-600">{label}</label>

      <TagsInput name={name} value={value} onChange={onChange} />
    </div>
  );
}
export default TagInputField;
