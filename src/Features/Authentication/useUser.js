import { useQuery } from "@tanstack/react-query";
import { getUser } from "../../Services/authService";

export default function useUser() {
  const { isLoading, data } = useQuery({
    queryKey: ["user"],
    queryFn: getUser,
    retry: false,
  });

  const { user = {} } = data || {};

  return { isLoading, user };
}
