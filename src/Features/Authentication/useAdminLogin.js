import { useMutation, useQueryClient } from "@tanstack/react-query";
import { adminLogin } from "../../Services/authService";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function useAdminLogin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { isPending, mutate: login } = useMutation({
    mutationFn: adminLogin,

    onSuccess: async (data) => {
      queryClient.setQueryData(["user"], data.user);
      await queryClient.invalidateQueries(["user"]);
      toast.success(data.message);
      navigate("/admin");
    },
    onError: (err) => toast.error(err?.response?.data?.message),
  });

  return { isPending, login };
}
