import { HiOutlineUser } from "react-icons/hi";
import { Link } from "react-router-dom";
import DarkModeToggle from "./DarkModeToggle";
import Logout from "../Features/Authentication/Logout";
import useUser from "../Features/Authentication/useUser";
import Login from "../Features/Authentication/Login";
import AdminLogin from "../Features/Authentication/AdminLogin";

const ROLES = {
  ADMIN: "admin",
  OWNER: "owner",
  FREELANCER: "freelancer",
};

function HeaderMenu({ home }) {
  const { user } = useUser();

  return (
    <div>
      <ul className="flex items-center gap-x-2 md:gap-x-4">
        {home && <AdminLogin />}

        {user.isActive && (
          <li className="flex">
            <Link to={`/${ROLES[user.role]}/dashboard`}>
              <HiOutlineUser className="h-5 w-5 text-primary-800 hover:text-primary-900" />
            </Link>
          </li>
        )}

        <li className="flex">
          <DarkModeToggle />
        </li>

        <li className="flex">{user.isActive ? <Logout /> : <Login />}</li>
      </ul>
    </div>
  );
}
export default HeaderMenu;
