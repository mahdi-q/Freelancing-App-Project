import { useForm } from "react-hook-form";
import TextFieldInput from "../../UI/TextFieldInput";
import RHFSelectOption from "../../UI/RHFSelectOption";
import TagInputField from "../../UI/TagInputField";
import { useState } from "react";
import DatePickerField from "../../UI/DatePickerField";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import useCategories from "../../Hooks/useCategories";
import useCreateProject from "./useCreateProject";
import Loader from "../../UI/Loader";

function CreateProjectForm({ onClose }) {
  const [tags, setTags] = useState([]);
  const [date, setDate] = useState(new Date());

  const { categories } = useCategories();

  const { isCreating, createProject } = useCreateProject();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const deadline = new Date(date).toISOString();

    const newProject = { ...data, tags, deadline };

    createProject(newProject, {
      onSuccess: () => {
        onClose();
        reset();
      },
    });
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
      <TextFieldInput
        label="عنوان"
        name="title"
        register={register}
        required
        validationSchema={{
          required: "نوشتن عنوان پروژه ضروری می باشد",
          minLength: {
            value: 8,
            message: "عنوان پروژه باید بیشتر از ۸ کارکتر باشد",
          },
        }}
        errors={errors}
      />

      <TextFieldInput
        label="توضیحات"
        name="description"
        register={register}
        required
        validationSchema={{
          required: "نوشتن توضیحات پروژه ضروری می باشد",
          maxLength: {
            value: 50,
            message: "توضیحات پروژه باید کمتر از ۵۰ کارکتر باشد",
          },
        }}
        errors={errors}
      />

      <TextFieldInput
        label="بودجه"
        name="budget"
        register={register}
        required
        validationSchema={{
          required: "نوشتن بودجه پروژه ضروری می باشد",
        }}
        errors={errors}
        type="number"
      />

      <RHFSelectOption
        label="دسته بندی"
        name="category"
        options={categories}
        register={register}
        required
        validationSchema={{
          required: "حتما باید یک دسته بندی را انتخاب کنید",
        }}
        errors={errors}
      />

      <TagInputField
        label="تگ ها"
        name="tags"
        value={tags}
        onChange={setTags}
      />

      <DatePickerField
        label="ددلاین"
        name="deadline"
        date={date}
        setDate={setDate}
        calender={persian}
        locale={persian_fa}
        format="YYYY/MM/DD"
      />

      {isCreating ? (
        <Loader />
      ) : (
        <button type="submit" className="btn btn--primary w-full !mb-4">
          تایید
        </button>
      )}
    </form>
  );
}
export default CreateProjectForm;
