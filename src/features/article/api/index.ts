import { apiClient } from "@/shared/api/client";
import type { IArticle } from "../model/types";

export const fetchAllArticles = async (): Promise<IArticle[]> => {
  return await apiClient.get<IArticle[]>("posts");
};

export const fetchArticleById = async (id: string): Promise<IArticle> => {
  return await apiClient.get<IArticle>(`posts/${id}`);
};

export const getPaginatedArticles = (
  articles: IArticle[],
  page: number,
  perPage: number
): IArticle[] => {
  const start = (page - 1) * perPage;
  const end = start + perPage;
  return articles.slice(start, end);
};
