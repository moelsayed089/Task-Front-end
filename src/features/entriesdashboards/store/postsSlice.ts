import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface Post {
  id: number;
  title: string;
  body: string;
  tags: string[];
  reactions: { likes: number; dislikes: number };
  views: number;
  userId: number;
}

interface PostsState {
  items: Post[];
}

const initialState: PostsState = {
  items: [],
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addPost: (state, action: PayloadAction<Post>) => {
      state.items.unshift(action.payload);
    },
    editPost: (
      state,
      action: PayloadAction<{ id: number; title: string; body: string }>
    ) => {
      const index = state.items.findIndex(
        (post) => post.id === action.payload.id
      );
      if (index !== -1) {
        state.items[index] = { ...state.items[index], ...action.payload };
      }
    },
  },
});

export const { addPost, editPost } = postsSlice.actions;
export default postsSlice.reducer;
