import { useState } from "react";
import OTPInput from "react-otp-input";

function CheckOTPForm() {
  const [otp, setOtp] = useState("");

  return (
    <form className="mx-4 space-y-6 rounded-lg border border-secondary-300 px-3 py-6">
      <p className="mb-2 text-secondary-600">کد ارسال شده را وارد کنید</p>

      <OTPInput
        value={otp}
        onChange={setOtp}
        numInputs={6}
        renderSeparator={<span>-</span>}
        renderInput={(props) => <input {...props} />}
        containerStyle={{
          display:"flex",
          flexDirection:"row-reverse",
          justifyContent:"center",
          gap:"8px"
        }}
        inputStyle={{
          border: "1px solid rgb(var(--color-secondary-400))",
          borderRadius: "3px",
          width: "1.6rem",
          padding: "0.4rem 0.3rem 0.1rem 0.3rem",
        }}
      />

      <button className="btn btn--primary w-full">تایید</button>
    </form>
  );
}
export default CheckOTPForm;
