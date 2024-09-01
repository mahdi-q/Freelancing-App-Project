import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import OTPInput from "react-otp-input";
import { checkOtp } from "../../Services/authService";
import toast from "react-hot-toast";
import Loader from "../../UI/Loader";
import { useNavigate } from "react-router-dom";

function CheckOTPForm({ phoneNumber }) {
  const [otp, setOtp] = useState("");

  const navigate = useNavigate();

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

  return (
    <form
      className="mx-4 space-y-6 rounded-lg border border-secondary-300 px-3 py-6"
      onSubmit={checkOtpHandler}
    >
      <p className="mb-2 text-secondary-600">کد ارسال شده را وارد کنید</p>

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
          width: "1.6rem",
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
  );
}
export default CheckOTPForm;
