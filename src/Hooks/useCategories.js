import { useQuery } from "@tanstack/react-query";
import { getCategoriesApi } from "../Services/categoryService";

export default function useCategories() {
  const { isLoading, data } = useQuery({
    queryKey: ["categories"],
    queryFn: getCategoriesApi,
  });

  const { categories: rawCategories = [] } = data || {};

  const categories = rawCategories.map((category) => ({
    label: category.title,
    value: category._id,
  }));

  const transformedCategories = rawCategories.map((category) => ({
    label: category.title,
    value: category.englishTitle,
  }));

  return { isLoading, categories, transformedCategories,rawCategories };
}
