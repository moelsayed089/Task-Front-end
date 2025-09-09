import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import type { Post } from "../types/Posts.type";
import EditPostsDialog from "./EditPostsDialog";

type DisplayPostsTableProps = {
  posts: Post[];
};

const DisplayPostsTable = ({ posts }: DisplayPostsTableProps) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>ID</TableHead>
          <TableHead>Title</TableHead>
          <TableHead>Tags</TableHead>
          <TableHead>Likes</TableHead>
          <TableHead>Dislikes</TableHead>
          <TableHead>Views</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        {posts.length ? (
          posts.map((post) => (
            <TableRow key={post.id}>
              <TableCell>{post.id}</TableCell>
              <TableCell className="font-medium">{post.title}</TableCell>
              <TableCell>{post.tags.join(", ")}</TableCell>
              <TableCell>{post.reactions.likes}</TableCell>
              <TableCell>{post.reactions.dislikes}</TableCell>
              <TableCell>{post.views}</TableCell>
              <TableCell>
                <EditPostsDialog
                  postId={post.id}
                  initialTitle={post.title}
                  initialBody={post.body}
                />
              </TableCell>
            </TableRow>
          ))
        ) : (
          <TableRow>
            <TableCell colSpan={6} className="text-center">
              No posts found
            </TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
};

export default DisplayPostsTable;
