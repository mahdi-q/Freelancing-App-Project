import useCategories from "../../../Hooks/useCategories";
import FilterButton from "../../../UI/FilterButton";
import FilterDropDown from "../../../UI/FilterDropDown";


function ProjectsHeader() {
  const { transformedCategories } = useCategories();

  return (
    <div className="mb-8 flex items-center justify-between px-4">
      <h1 className="text-xl font-black text-secondary-700">لیست پروژه ها</h1>

      <div className="flex flex-row-reverse items-center gap-x-4">
        <FilterDropDown
          filterField="category"
          options={[
            {
              label: "همه دسته بندی ها",
              value: "ALL",
            },
            ...transformedCategories,
          ]}
        />

        <FilterDropDown
          filterField="sort"
          options={[
            {
              label: "قدیمی ترین",
              value: "earliest",
            },
            {
              label: "جدید ترین",
              value: "latest",
            },
          ]}
        />

        <FilterButton
          filterField="status"
          title="وضعیت :"
          options={[
            {
              label: "همه",
              value: "ALL",
            },
            {
              label: "باز",
              value: "OPEN",
            },
            {
              label: "بسته",
              value: "CLOSED",
            },
          ]}
        />
      </div>
    </div>
  );
}
export default ProjectsHeader;