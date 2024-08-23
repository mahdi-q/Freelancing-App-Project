import SendOTPForm from "../Features/Authentication/SendOTPForm";

function Auth() {
  return (
    <div className="absolute left-1/2 top-1/2 w-full -translate-x-1/2 -translate-y-1/2 transform sm:max-w-md">
      <SendOTPForm />
    </div>
  );
}
export default Auth;
