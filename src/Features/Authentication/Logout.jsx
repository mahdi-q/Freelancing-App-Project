import { HiOutlineArrowRightOnRectangle } from "react-icons/hi2";
import useLogout from "./useLogout";
import Modal from "../../UI/Modal";
import { useState } from "react";

function Logout() {
  const [open, setOpen] = useState(false);

  const { logout } = useLogout();

  return (
    <>
      <button onClick={() => setOpen(true)}>
        <HiOutlineArrowRightOnRectangle className="h-5 w-5 text-secondary-600 hover:text-error" />
      </button>

      <Modal
        open={open}
        onClose={() => setOpen(false)}
        title="خروج از حساب کاربری"
      >
        <p className="mb-6 text-base text-secondary-600">
          آیا می‌خواهید از حساب کاربری خود خارج شوید ؟
        </p>

        <div className="flex items-center justify-center gap-2">
          <button className="btn btn--danger flex-1 p-2" onClick={logout}>
            بله
          </button>

          <button
            className="btn btn--outline flex-1 p-2"
            onClick={() => setOpen(false)}
          >
            خیر
          </button>
        </div>
      </Modal>
    </>
  );
}
export default Logout;
