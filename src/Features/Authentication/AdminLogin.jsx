import { useNavigate } from "react-router-dom";

function AdminLogin() {
  const navigate = useNavigate();

  return (
    <button
      className="btn btn--primary p-2 text-sm"
      onClick={() => navigate("/admin-auth")}
    >
      ورود به پنل ادمین
    </button>
  );
}
export default AdminLogin;
