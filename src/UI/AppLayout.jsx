import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";

function AppLayout() {
  return (
    <div className="grid h-screen grid-cols-[15rem_1fr] grid-rows-[auto_1fr]">
      <Header />

      <Sidebar />

      <div className="overflow-y-auto bg-secondary-100 p-8">
        <div className="mx-auto max-w-screen-md">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
export default AppLayout;
