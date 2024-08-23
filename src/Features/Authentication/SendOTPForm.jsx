import { useState } from "react";
import TextFieldInput from "../../UI/TextFieldInput";

function SendOTPForm() {
  const [phoneNumber, setPhoneNumber] = useState("");

  return (
    <form className="mx-4 space-y-6 rounded-lg border border-secondary-300 px-3 py-6">
      <h2 className="text-center text-lg">سلام! خوش آمدید</h2>

      <TextFieldInput
        label={"لطفا شماره موبایل خود را وارد کنید"}
        name={"phoneNumber"}
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
      />

      <button className="btn btn--primary w-full">ارسال کد تایید</button>
    </form>
  );
}
export default SendOTPForm;
