import { NavLink } from "react-router-dom";

function CustomNavlink({ children, to }) {
  const navLinkClass =
    "flex items-center gap-x-2 rounded-md p-2 transition-all duration-300";

  return (
    <li>
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
    </li>
  );
}

export default CustomNavlink;
