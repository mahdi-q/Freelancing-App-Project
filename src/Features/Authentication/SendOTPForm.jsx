import TextFieldInput from "../../UI/TextFieldInput";
import Loader from "../../UI/Loader";

function SendOTPForm({ onSendOtp, isSendingOtp, register, errors }) {
  return (
    <form
      className="mx-4 space-y-6 rounded-lg border border-secondary-300 px-3 py-6"
      onSubmit={onSendOtp}
    >
      <h2 className="text-center text-lg font-bold text-secondary-900">
        سلام! خوش آمدید
      </h2>

      <TextFieldInput
        label={"لطفا شماره موبایل خود را وارد کنید"}
        name={"phoneNumber"}
        register={register}
        type="number"
        validationSchema={{
          required: "وارد کردن شماره موبایل ضروری می باشد",
          pattern: {
            value: /^09[0-9]{9}$/,
            message: "شماره موبایل وارد شده نامعتبر است",
          },
        }}
        errors={errors}
      />

      {isSendingOtp ? (
        <Loader />
      ) : (
        <button type="submit" className="btn btn--primary w-full">
          ارسال کد تایید
        </button>
      )}
    </form>
  );
}
export default SendOTPForm;
