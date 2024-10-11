import { useQuery } from "@tanstack/react-query";
import { getProjecstApi } from "../Services/projectService";

export default function useProjects() {
  const { isLoading, data } = useQuery({
    queryKey: ["projects"],
    queryFn: getProjecstApi,
  });

  const { projects } = data || {};

  return { isLoading, projects };
}
