import http from "./httpService";

export function getCategoriesApi() {
  return http.get("/category/list").then(({ data }) => data.data);
}

export function createCategoryApi(data) {
  return http.post("/admin/category/add", data).then(({ data }) => data.data);
}
