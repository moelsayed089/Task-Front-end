import { useSelector } from "react-redux";
import type { RootState } from "@/app/store/store";
import useGetAllPosts from "../services/GetAllPosts";
import SearchBar from "./SearchBar";
import DisplayPostsTable from "./DisplayPostsTable";
import PostsPagination from "./PostsPagination";
import TableSkeleton from "./loadingSkeleton/TableSkeleton";
import AddPostDialog from "./AddPostDialog";
import { useMemo, useState } from "react";

const DisplayPostsForm = () => {
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const limit = 50;
  const { data, isLoading, error } = useGetAllPosts(page, limit);
  const totalPages = Math.ceil((data?.total || 0) / limit);

  const newPosts = useSelector((state: RootState) => state.posts.items);

  const mergedPosts = useMemo(() => {
    if (!data?.posts) return newPosts;
    return [...newPosts, ...data.posts];
  }, [data?.posts, newPosts]);

  const filteredPosts = useMemo(() => {
    return mergedPosts.filter(
      (post) =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.tags.some((tag) =>
          tag.toLowerCase().includes(searchTerm.toLowerCase())
        )
    );
  }, [mergedPosts, searchTerm]);

  if (error) return <div>Error loading posts</div>;

  return (
    <>
      <div className="space-y-2">
        <h1 className="text-3xl text-main-color font-semibold ">
          Posts Management
        </h1>
        <p className="text-pragraph-color">Manage posts on the platform</p>

        <div className="flex  items-center justify-between gap-4 flex-wrap mb-7 mt-5 dark:bg-black bg-gray-100/60 p-6 rounded-md ">
          <SearchBar onSearch={setSearchTerm} />
          <AddPostDialog />
        </div>
      </div>

      {isLoading ? (
        <TableSkeleton />
      ) : (
        <DisplayPostsTable posts={filteredPosts} />
      )}

      <div className="mt-5">
        <PostsPagination
          page={page}
          totalPages={totalPages}
          onPageChange={setPage}
        />
      </div>
    </>
  );
};

export default DisplayPostsForm;
