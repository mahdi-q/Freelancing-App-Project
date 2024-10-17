import { useQuery } from "@tanstack/react-query";
import { getUsers } from "../../Services/authService";
import { useLocation } from "react-router-dom";
import queryString from "query-string";

export default function useUsers() {
  const { search } = useLocation();

  const queryObject = queryString.parse(search);

  const { isLoading, data } = useQuery({
    queryKey: ["users", queryObject],
    queryFn: () => getUsers(search),
  });

  const { users } = data || {};

  return { isLoading, users };
}
