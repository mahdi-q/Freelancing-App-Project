import { Link } from "react-router-dom";
import UserAvatar from "../Features/Authentication/UserAvatar";
import useUser from "../Features/Authentication/useUser";
import HeaderMenu from "./HeaderMenu";

function Header() {
  const { isLoading } = useUser();

  return (
    <div className="border-b border-secondary-300 bg-secondary-0 px-8 py-2">
      <div
        className={`container flex items-center justify-between px-0 xl:max-w-screen-lg ${isLoading ? "opacity-30 blur-sm" : ""}`}
      >
        <div className="flex items-center gap-x-4">
          <Link to="/">
            <img className="h-14 w-14" src="/logo.svg" alt="Logo" />
          </Link>

          <UserAvatar />
        </div>

        <HeaderMenu />
      </div>
    </div>
  );
}
export default Header;
