import { useEffect, useState } from "react";
import SendOTPForm from "./SendOTPForm";
import CheckOTPForm from "./CheckOTPForm";
import { useMutation } from "@tanstack/react-query";
import { getOtp } from "../../Services/authService";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import useUser from "./useUser";
import { useNavigate } from "react-router-dom";

function AuthContainer() {
  const [step, setStep] = useState(1);

  const navigate = useNavigate();

  const { user } = useUser();

  useEffect(() => {
    if (user.isActive) return navigate("/", { replace: true });
  }, [user, navigate]);

  const {
    isPending,
    data: otpResponse,
    mutateAsync,
  } = useMutation({
    mutationFn: getOtp,
  });

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm();

  const sendOtpHandler = async (data) => {
    try {
      const { message } = await mutateAsync(data);
      setStep(2);
      toast.success(message);
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <SendOTPForm
            register={register}
            onSendOtp={handleSubmit(sendOtpHandler)}
            errors={errors}
            isSendingOtp={isPending}
          />
        );
      case 2:
        return (
          <CheckOTPForm
            setStep={setStep}
            phoneNumber={getValues("phoneNumber")}
            onResendOtp={sendOtpHandler}
            otpResponse={otpResponse}
          />
        );
      default:
        return null;
    }
  };

  return <>{renderStep()}</>;
}
export default AuthContainer;
