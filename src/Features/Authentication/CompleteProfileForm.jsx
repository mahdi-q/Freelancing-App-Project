import { useState } from "react";
import TextFieldInput from "../../UI/TextFieldInput";
import RadioFieldInput from "../../UI/RadioFieldInput";
import { useMutation } from "@tanstack/react-query";
import { completeProfile } from "../../Services/authService";
import toast from "react-hot-toast";
import Loader from "../../UI/Loader";
import { useNavigate } from "react-router-dom";

function CompleteProfileForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("USER");

  const navigate = useNavigate();

  const { isPending, mutateAsync } = useMutation({
    mutationFn: completeProfile,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { user, message } = await mutateAsync({ name, email, role });

      setName("");
      setEmail("");
      setRole("USER");

      toast.success(message);

      if (user.status === 0) {
        navigate("/");
        toast("اطلاعات حساب کاربری شما رد شده است.");
        return;
      }

      if (user.status === 1) {
        navigate("/");
        toast("اطلاعات حساب کاربری  شما در حال بررسی است.");
        return;
      }

      if (user.status === 2) {
        if (user.role === "OWNER") return navigate("/owner");

        if (user.role === "FREELANCER") return navigate("/freelancer");
      }
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  return (
    <form
      className="mx-4 space-y-6 rounded-lg border border-secondary-300 px-3 py-6"
      onSubmit={handleSubmit}
    >
      <TextFieldInput
        label="نام و نام خانوادگی"
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <TextFieldInput
        label="ایمیل"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <div className="flex items-center justify-center gap-x-10">
        <RadioFieldInput
          label="کارفرما"
          name="role"
          id="OWNER"
          value="OWNER"
          onChange={(e) => setRole(e.target.value)}
          checked={role === "OWNER"}
        />

        <RadioFieldInput
          label="فریلنسر"
          name="role"
          id="FREELANCER"
          value="FREELANCER"
          onChange={(e) => setRole(e.target.value)}
          checked={role === "FREELANCER"}
        />
      </div>

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
export default CompleteProfileForm;
