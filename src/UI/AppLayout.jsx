import { Outlet } from "react-router-dom";
import Header from "./Header";
import { useToggle } from "../Contexts/ToggleContext";
import useOutsideClick from "../Hooks/useOutsideClick";

function AppLayout({ children }) {
  const { isToggleOpen, setIsToggleOpen } = useToggle();

  const ref = useOutsideClick(() => setIsToggleOpen(false));

  return (
    <div className="grid h-screen w-full grid-cols-[1fr] grid-rows-[auto_1fr] md:grid-cols-[15rem_1fr]">
      <Header />

      <div
        className={`${isToggleOpen ? "backdrop-blur-sm" : "hidden"} md:block fixed left-0 top-0 row-span-2 row-start-1 h-screen w-full overflow-y-auto md:relative`}
      >
        <div ref={ref} className="fixed w-[200px] md:relative md:w-full">
          {children}
        </div>
      </div>

      <div className="overflow-y-auto bg-secondary-100 p-8 md:col-start-2">
        <div className="mx-auto max-w-screen-lg">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
export default AppLayout;
