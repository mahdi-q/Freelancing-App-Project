import { useQuery } from "@tanstack/react-query";
import { getUsers } from "../../Services/authService";

export default function useUsers() {
  const { isLoading, data } = useQuery({
    queryKey: ["users"],
    queryFn: getUsers,
  });

  const { users } = data || {};

  return { isLoading, users };
}
