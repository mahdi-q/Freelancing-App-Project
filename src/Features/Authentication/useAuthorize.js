import { useLocation } from "react-router-dom";
import useUser from "./useUser";

const ROLES = {
  admin: "ADMIN",
  owner: "OWNER",
  freelancer: "FREELANCER",
};

export default function useAuthorize() {
  const { isLoading, user } = useUser();

  const { pathname } = useLocation();

  const desiredRole = pathname.split("/").at(1);

  let isAuthenticated = false;
  let isAuthorized = false;
  let isVerified = false;

  // change user authentication
  if (user) isAuthenticated = true;

  // change user authorization
  if (Object.keys(ROLES).includes(desiredRole)) {
    if (user && user.role === ROLES[desiredRole]) isAuthorized = true;
  }

  // change user verification
  if (user && Number(user.status) === 2) isVerified = true;

  return { isLoading, isAuthenticated, isAuthorized, isVerified, user };
}
