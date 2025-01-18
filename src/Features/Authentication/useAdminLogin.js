import { useMutation, useQueryClient } from "@tanstack/react-query";
import { adminLogin } from "../../Services/authService";
import toast from "react-hot-toast";

export default function useAdminLogin() {
  const queryClient = useQueryClient();

  const { isPending, mutate: login } = useMutation({
    mutationFn: adminLogin,

    onSuccess: (data) => {
      queryClient.setQueryData(["user"], (oldData) => ({
        ...oldData,
        user: data.admin,
      }));
      toast.success(data.message);
    },
    onError: (err) => toast.error(err?.response?.data?.message),
  });

  return { isPending, login };
}
