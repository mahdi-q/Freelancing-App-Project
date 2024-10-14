import { useQuery } from "@tanstack/react-query";
import { getProjecstApi } from "../Services/projectService";
import { useLocation } from "react-router-dom";
import queryString from "query-string";

export default function useProjects() {
  const { search } = useLocation();

  // using query-string
  const queryObject = queryString.parse(search);

  // using javascript
  // const queryObject = Object.fromEntries(new URLSearchParams(search));

  const { isLoading, data } = useQuery({
    queryKey: ["projects", queryObject],
    queryFn: () => getProjecstApi(search),
  });

  const { projects } = data || {};

  return { isLoading, projects };
}
