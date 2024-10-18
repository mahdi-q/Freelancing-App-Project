import { Link } from "react-router-dom";
import UserAvatar from "../Features/Authentication/UserAvatar";
import useUser from "../Features/Authentication/useUser";
import HeaderMenu from "./HeaderMenu";
import { HiOutlineMenu } from "react-icons/hi";
import { useToggle } from "../Contexts/ToggleContext";

function Header({ home }) {
  const { isLoading } = useUser();

  const { setIsToggleOpen } = useToggle();

  return (
    <div className="border-b border-secondary-300 bg-secondary-0 px-8 py-2 md:col-start-2">
      <div
        className={`container flex items-center justify-between px-0 xl:max-w-screen-lg ${isLoading ? "opacity-30 blur-sm" : ""}`}
      >
        <div className="flex items-center gap-x-4">
          <Link to="/">
            <img
              className="h-10 w-10 md:h-14 md:w-14"
              src="/logo.svg"
              alt="Logo"
            />
          </Link>

          {!home && (
            <button className="md:hidden" onClick={() => setIsToggleOpen(true)}>
              <HiOutlineMenu className="h-7 w-7 text-primary-900" />
            </button>
          )}

          <UserAvatar />
        </div>

        <HeaderMenu />
      </div>
    </div>
  );
}
export default Header;
