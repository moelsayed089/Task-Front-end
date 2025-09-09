import { useGetQuery } from "@/app/hooks/useGetQuery";
import type { PostsResponse } from "../types/Posts.type";

const useGetAllPosts = (page: number, limit: number = 10) => {
  const skip = (page - 1) * limit;
  return useGetQuery<PostsResponse>(
    "getallposts",
    `/posts?limit=${limit}&skip=${skip}&sortBy=id&order=desc`
  );
};
export default useGetAllPosts;
