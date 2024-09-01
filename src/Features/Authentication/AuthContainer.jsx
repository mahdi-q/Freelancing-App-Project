import { useState } from "react";
import SendOTPForm from "./SendOTPForm";
import CheckOTPForm from "./CheckOTPForm";
import { useMutation } from "@tanstack/react-query";
import { getOtp } from "../../Services/authService";
import toast from "react-hot-toast";

function AuthContainer() {
  const [step, setStep] = useState(2);
  const [phoneNumber, setPhoneNumber] = useState("09370282373");

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

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <SendOTPForm
            phoneNumber={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            onSendOtp={sendOtpHandler}
            isSendingOtp={isPending}
          />
        );
      case 2:
        return (
          <CheckOTPForm
            setStep={setStep}
            phoneNumber={phoneNumber}
            onResendOtp={sendOtpHandler}
          />
        );
      default:
        return null;
    }
  };

  return <>{renderStep()}</>;
}
export default AuthContainer;
