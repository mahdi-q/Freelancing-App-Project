import TextFieldInput from "../../UI/TextFieldInput";
import Loader from "../../UI/Loader";

function SendOTPForm({ onSendOtp, isSendingOtp, phoneNumber, onChange }) {
  return (
    <form
      className="mx-4 space-y-6 rounded-lg border border-secondary-300 px-3 py-6"
      onSubmit={onSendOtp}
    >
      <h2 className="text-center text-lg">سلام! خوش آمدید</h2>

      <TextFieldInput
        label={"لطفا شماره موبایل خود را وارد کنید"}
        name={"phoneNumber"}
        value={phoneNumber}
        onChange={onChange}
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
