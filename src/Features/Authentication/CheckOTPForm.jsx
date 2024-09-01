import { useMutation } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import OTPInput from "react-otp-input";
import { checkOtp } from "../../Services/authService";
import toast from "react-hot-toast";
import Loader from "../../UI/Loader";
import { useNavigate } from "react-router-dom";

const RESEND_TIME = 90;

function CheckOTPForm({ setStep, phoneNumber, onResendOtp, otpResponse }) {
  const [otp, setOtp] = useState("");
  const [time, setTime] = useState(RESEND_TIME);

  const navigate = useNavigate();

  useEffect(() => {
    const timer = time > 0 && setInterval(() => setTime((t) => t - 1), 1000);

    return () => {
      if (timer) clearInterval(timer);
    };
  }, [time]);

  const { isPending, mutateAsync } = useMutation({
    mutationFn: checkOtp,
  });

  const checkOtpHandler = async (e) => {
    e.preventDefault();

    try {
      const { message, user } = await mutateAsync({ phoneNumber, otp });

      if (user.isActive) {
        if (user.role === "OWNER") navigate("/owner");
        if (user.role === "FREELANCER") navigate("/freelancer");
      } else {
        navigate("/complete-profile");
      }

      toast.success(message);
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  const ResendOtpHandler = (e) => {
    setTime(RESEND_TIME);

    onResendOtp(e);
  };

  return (
    <div className="mx-4 space-y-3 rounded-lg border border-secondary-300 px-3 py-6">
      <form className="space-y-6" onSubmit={checkOtpHandler}>
        {otpResponse ? (
          <p className="mb-2 mr-2 text-secondary-600">{otpResponse?.message}</p>
        ) : (
          <p className="mb-2 mr-2 text-secondary-600">
            کد تایید ارسال شده را وارد کنید
          </p>
        )}

        <OTPInput
          value={otp}
          onChange={setOtp}
          numInputs={6}
          renderSeparator={<span>-</span>}
          renderInput={(props) => <input {...props} />}
          containerStyle={{
            display: "flex",
            flexDirection: "row-reverse",
            justifyContent: "center",
            gap: "8px",
          }}
          inputStyle={{
            border: "1px solid rgb(var(--color-secondary-400))",
            borderRadius: "3px",
            width: "1.8rem",
            padding: "0.4rem 0.3rem 0.1rem 0.3rem",
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

      <div className="flex items-center justify-between">
        {time > 0 ? (
          <p className="text-sm text-secondary-500">
            {<strong>{time}</strong>} ثانیه تا ارسال مجدد کد تایید
          </p>
        ) : (
          <button
            className="p-1 text-sm text-primary-800"
            onClick={ResendOtpHandler}
          >
            ارسال مجدد کد تایید
          </button>
        )}

        <button
          className="p-1 text-sm text-primary-800"
          onClick={() => setStep((s) => s - 1)}
        >
          ویرایش شماره
        </button>
      </div>
    </div>
  );
}
export default CheckOTPForm;
