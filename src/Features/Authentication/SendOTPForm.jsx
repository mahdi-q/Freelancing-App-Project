import { useState } from "react";
import TextFieldInput from "../../UI/TextFieldInput";
import { useMutation } from "@tanstack/react-query";
import { getOtp } from "../../Services/authService";
import toast from "react-hot-toast";
import Loader from "../../UI/Loader";

function SendOTPForm({ setStep }) {
  const [phoneNumber, setPhoneNumber] = useState("");

  const { isPending, mutateAsync } = useMutation({
    mutationFn: getOtp,
  });

  const sendOtpHandler = async (e) => {
    e.preventDefault();

    try {
      const data = await mutateAsync({ phoneNumber });
      setStep(2);
      toast.success(data.message);
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  return (
    <form
      className="mx-4 space-y-6 rounded-lg border border-secondary-300 px-3 py-6"
      onSubmit={sendOtpHandler}
    >
      <h2 className="text-center text-lg">سلام! خوش آمدید</h2>

      <TextFieldInput
        label={"لطفا شماره موبایل خود را وارد کنید"}
        name={"phoneNumber"}
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
      />

      {isPending ? (
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
