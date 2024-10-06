import { HiOutlineUser } from "react-icons/hi";
import { Link } from "react-router-dom";
import DarkModeToggle from "./DarkModeToggle";
import Logout from "../Features/Authentication/Logout";

function HeaderMenu() {
  return (
    <div>
      <ul className="flex items-center gap-x-4">
        <li className="flex">
          <Link to={"dashboard"}>
            <HiOutlineUser className="h-5 w-5 text-primary-800 hover:text-primary-900" />
          </Link>
        </li>

        <li className="flex">
          <DarkModeToggle />
        </li>

        <li className="flex">
          <Logout />
        </li>
      </ul>
    </div>
  );
}
export default HeaderMenu;
