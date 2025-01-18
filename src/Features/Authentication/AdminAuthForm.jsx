import { useForm } from "react-hook-form";
import Loader from "../../UI/Loader";
import TextFieldInput from "../../UI/TextFieldInput";
import useAdminLogin from "./useAdminLogin";
import { useNavigate } from "react-router-dom";

function AdminAuthForm() {
  const navigate = useNavigate();

  const { isPending, login } = useAdminLogin();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "admin@example.com",
      password: "12345",
    },
  });

  const onSubmit = (data) => {
    login(data, {
      onSuccess: () => {
        navigate("/admin");
      },
    });
  };

  return (
    <form
      className="mx-4 space-y-6 rounded-lg border border-secondary-300 px-3 py-6"
      onSubmit={handleSubmit(onSubmit)}
    >
      <h2 className="text-center text-lg font-bold text-secondary-900">
        سلام! خوش آمدید
      </h2>

      <p className="text-base text-error opacity-80">
        * لطفا بدون اینکه اطلاعات فرم را تغییر دهید وارد شوید.
      </p>

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

      <TextFieldInput
        label="رمز عبور"
        name="password"
        register={register}
        validationSchema={{
          required: "وارد کردن رمز عبور ضروری می باشد",
        }}
        errors={errors}
        type="password"
      />

      {isPending ? (
        <Loader />
      ) : (
        <button type="submit" className="btn btn--primary w-full">
          ورود به پنل ادمین
        </button>
      )}
    </form>
  );
}
export default AdminAuthForm;
