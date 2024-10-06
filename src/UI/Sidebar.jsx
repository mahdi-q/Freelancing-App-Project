import { HiCollection, HiHome } from "react-icons/hi";
import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <div className="row-span-2 row-start-1 bg-secondary-0 p-4 border-l border-secondary-300">
      <ul className="flex flex-col gap-y-4">
        <li>
          <CustomNavlink to="/owner/dashboard">
            <HiHome />
            <span>داشبورد</span>
          </CustomNavlink>
        </li>
        <li>
          <CustomNavlink to="/owner/projects">
            <HiCollection />
            <span>پروژه ها</span>
          </CustomNavlink>
        </li>
      </ul>
    </div>
  );
}
export default Sidebar;

function CustomNavlink({ children, to }) {
  const navLinkClass =
    "flex items-center gap-x-2 rounded-md p-2 transition-all duration-300";

  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive
          ? `${navLinkClass} bg-primary-100/80 text-primary-900`
          : `${navLinkClass} bg-secondary-100 text-secondary-600 hover:bg-primary-100/80 hover:text-primary-900`
      }
    >
      {children}
    </NavLink>
  );
}
