import { useState } from "react";
import TextFieldInput from "../../UI/TextFieldInput";
import RadioFieldInput from "../../UI/RadioFieldInput";

function CompleteProfileForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("USER");

  return (
    <form className="mx-4 space-y-6 rounded-lg border border-secondary-300 px-3 py-6">
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

      <button type="submit" className="btn btn--primary w-full">
        تایید
      </button>
    </form>
  );
}
export default CompleteProfileForm;
