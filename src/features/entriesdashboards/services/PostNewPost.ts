import { usePostMutation } from "@/app/hooks/usePostMutation";

const useAddPost = () => {
  return usePostMutation("/posts/add");
};

export default useAddPost;
