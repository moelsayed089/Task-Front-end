import { useDispatch } from "react-redux";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { addPost } from "../store/postsSlice";
import useAddPost from "../services/PostNewPost";
import { DialogDescription } from "@radix-ui/react-dialog";
import { postSchema } from "../validation/addPost";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";

type PostFormValues = {
  title: string;
  body: string;
};

const AddPostDialog = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<PostFormValues>({
    resolver: zodResolver(postSchema),
  });
  const addPostnewPost = useAddPost();

  const onSubmit = (data: PostFormValues) => {
    addPostnewPost.mutate(
      {
        ...data,
        userId: 5,
        tags: ["new", "post"],
        reactions: { likes: 0, dislikes: 0 },
        views: 0,
      },
      {
        onSuccess: (res) => {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          dispatch(addPost(res as any));
          console.log(" Post added successfully:", res);
          toast.success("Post added successfully!", {
            duration: 2000,
            position: "bottom-right",
          });
          reset();
        },
        onError: (err) => {
          console.error(" Error adding post:", err);
          toast.error("Error adding post", {
            duration: 2000,
            position: "bottom-right",
          });
        },
      }
    );
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Add New Post</Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add New Post</DialogTitle>
        </DialogHeader>
        <DialogDescription className="text-muted-foreground text-sm">
          Create a new post by filling out the form below.
        </DialogDescription>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <Input placeholder="Post title" {...register("title")} />
            {errors.title && (
              <p className="text-red-500 text-sm mt-1">
                {errors.title.message}
              </p>
            )}
          </div>

          <div>
            <Textarea placeholder="Post body" {...register("body")} />
            {errors.body && (
              <p className="text-red-500 text-sm mt-1">{errors.body.message}</p>
            )}
          </div>

          <div className="flex justify-end space-x-2">
            <Button type="submit" disabled={addPostnewPost.isPending}>
              {addPostnewPost.isPending ? "Saving..." : "Save"}
            </Button>
            <DialogClose asChild>
              <Button variant="destructive">Cancel</Button>
            </DialogClose>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddPostDialog;
