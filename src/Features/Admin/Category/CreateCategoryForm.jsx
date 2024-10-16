import { useForm } from "react-hook-form";
import TextFieldInput from "../../../UI/TextFieldInput";
import Loader from "../../../UI/Loader";
import useCreateCategory from "./useCreateCategory";

function CreateCategoryForm({ onClose }) {
  const { isCreating, createCategory } = useCreateCategory();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const newCategory = { ...data };

    createCategory(newCategory, {
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
          required: "نوشتن عنوان دسته بندی ضروری می باشد",
          minLength: {
            value: 8,
            message: "عنوان دسته بندی باید بیشتر از ۸ کارکتر باشد",
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
          required: "نوشتن توضیحات دسته بندی ضروری می باشد",
          maxLength: {
            value: 50,
            message: "توضیحات دسته بندی باید کمتر از ۵۰ کارکتر باشد",
          },
        }}
        errors={errors}
      />

      <TextFieldInput
        label="عنوان انگلیسی"
        name="englishTitle"
        register={register}
        required
        validationSchema={{
          required: "نوشتن عنوان انگلیسی ضروری می باشد",
        }}
        errors={errors}
      />

      <TextFieldInput
        label="نوع"
        name="type"
        register={register}
        required
        validationSchema={{
          required: "نوشتن نوع دسته بندی ضروری می باشد",
        }}
        errors={errors}
      />

      {isCreating ? (
        <Loader />
      ) : (
        <button type="submit" className="btn btn--primary !mb-4 w-full">
          تایید
        </button>
      )}
    </form>
  );
}
export default CreateCategoryForm;
