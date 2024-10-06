import http from "./httpService";

export function getCategoriesApi() {
  return http.get("/category/list").then(({data}) => data.data);
}
