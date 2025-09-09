import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { editPost } from "../store/postsSlice";
import toast from "react-hot-toast";

type EditPostFormValues = {
  title: string;
  body: string;
};

interface EditPostsDialogProps {
  postId: number;
  initialTitle: string;
  initialBody: string;
}

const EditPostsDialog = ({
  postId,
  initialTitle,
  initialBody,
}: EditPostsDialogProps) => {
  const dispatch = useDispatch();
  const { register, handleSubmit, reset } = useForm<EditPostFormValues>({
    defaultValues: { title: initialTitle, body: initialBody },
  });

  const onSubmit = (data: EditPostFormValues) => {
    dispatch(editPost({ id: postId, ...data }));
    console.log("Post edited successfully:", data);
    toast.success("Post edited successfully!", {
      duration: 2000,
      position: "bottom-right",
    });
    reset();
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Edit Post</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Post</DialogTitle>
          <DialogDescription className="text-muted-foreground text-sm">
            Make changes to your post below.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <Input
            placeholder="Title"
            {...register("title", { required: true })}
          />
          <Textarea
            placeholder="Body"
            {...register("body", { required: true })}
          />
          <div className="flex justify-end space-x-2">
            <Button type="submit">Save Changes</Button>
            <DialogClose asChild>
              <Button variant="destructive">Cancel</Button>
            </DialogClose>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default EditPostsDialog;
