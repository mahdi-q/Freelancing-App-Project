import { HiOutlineArrowRightOnRectangle } from "react-icons/hi2";
import useLogout from "./useLogout";

function Logout() {
  const { logout } = useLogout();
  
  return (
    <button onClick={logout}>
      <HiOutlineArrowRightOnRectangle className="h-5 w-5 text-secondary-600 hover:text-error" />
    </button>
  );
}
export default Logout;
