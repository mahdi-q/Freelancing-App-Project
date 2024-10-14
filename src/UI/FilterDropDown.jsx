import { useSearchParams } from "react-router-dom";
import SelectOption from "./SelectOption";

function FilterDropDown({ options, filterField }) {
  const [searchParams, setSearchParams] = useSearchParams();

  const value = searchParams.get(filterField) || "";

  const handleChange = (e) => {
    searchParams.set(filterField, e.target.value);
    setSearchParams(searchParams);
  };

  return (
    <SelectOption value={value} onChange={handleChange} options={options} />
  );
}
export default FilterDropDown;
