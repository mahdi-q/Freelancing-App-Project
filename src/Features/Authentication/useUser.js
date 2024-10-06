import { useQuery } from "@tanstack/react-query";
import { getUser } from "../../Services/authService";

export default function useUser() {
  return useQuery({
    queryKey: ["get-user"],
    queryFn: getUser,
    retry: false,
  });
}
