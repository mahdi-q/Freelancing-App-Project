import AdminAuthForm from "../Features/Authentication/AdminAuthForm";

function AdminAuth() {
  return (
    <div className="container xl:max-w-screen-xl">
      <div className="absolute left-1/2 top-1/2 w-full -translate-x-1/2 -translate-y-1/2 transform sm:max-w-md">
        <AdminAuthForm />
      </div>
    </div>
  );
}
export default AdminAuth;
