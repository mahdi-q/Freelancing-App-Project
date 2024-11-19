import TextFieldInput from "../../UI/TextFieldInput";
import { useMutation } from "@tanstack/react-query";
import { completeProfile } from "../../Services/authService";
import toast from "react-hot-toast";
import Loader from "../../UI/Loader";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import RadioInputGroup from "../../UI/RadioInputGroup";
import useUser from "./useUser";
import { useEffect } from "react";

function CompleteProfileForm() {
  const navigate = useNavigate();

  const { user } = useUser();

  useEffect(() => {
    if (user.isActive) return navigate("/", { replace: true });
  }, [user, navigate]);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const { isPending, mutateAsync } = useMutation({
    mutationFn: completeProfile,
  });

  const onSubmit = async (data) => {
    try {
      const { user, message } = await mutateAsync(data);

      toast.success(message);

      if (user.status === 0) {
        navigate("/");
        toast("اطلاعات حساب کاربری شما رد شده است.");
        return;
      }

      if (user.status === 1) {
        navigate("/");
        toast("اطلاعات حساب کاربری  شما در حال بررسی است.");
        return;
      }

      if (user.status === 2) {
        if (user.role === "OWNER") return navigate("/owner");

        if (user.role === "FREELANCER") return navigate("/freelancer");
      }
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  return (
    <form
      className="mx-4 space-y-6 rounded-lg border border-secondary-300 px-3 py-6"
      onSubmit={handleSubmit(onSubmit)}
    >
      <h2 className="mb-8 text-center text-xl font-bold text-secondary-900">
        تکمیل اطلاعات
      </h2>

      <TextFieldInput
        label="نام و نام خانوادگی"
        name="name"
        register={register}
        validationSchema={{
          required: "وارد کردن نام و نام خانوادگی ضروری می باشد",
        }}
        errors={errors}
      />

      <TextFieldInput
        label="ایمیل"
        name="email"
        register={register}
        validationSchema={{
          required: "وارد کردن ایمیل ضروری می باشد",
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "ایمیل وارد شده نامعتبر است",
          },
        }}
        errors={errors}
      />

      <RadioInputGroup
        register={register}
        watch={watch}
        errors={errors}
        configs={{
          name: "role",
          validationSchema: {
            required: "انتخاب یک نقش ضروری می باشد",
          },
          options: [
            { label: "کارفرما", value: "OWNER" },
            { label: "فریلنسر", value: "FREELANCER" },
          ],
        }}
      />

      {isPending ? (
        <Loader />
      ) : (
        <button type="submit" className="btn btn--primary w-full">
          تایید
        </button>
      )}
    </form>
  );
}
export default CompleteProfileForm;
