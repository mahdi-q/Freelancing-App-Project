import truncateText from "../../Utils/truncateText";
import useUser from "./useUser";

function UserAvatar() {
  const { user } = useUser();

  if (user.isActive)
    return (
      <div className="flex items-center gap-x-2 text-secondary-600">
        <img
          src="/user.jpg"
          alt="user-account"
          className="h-7 w-7 rounded-full object-cover object-center"
        />

        <span className="text-nowrap text-sm md:text-base">
          {truncateText(user?.name, 6)}
        </span>
      </div>
    );
}
export default UserAvatar;
