import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: [
    {
      id: 1,
      title: "Item 1",
      description: "This is the first item",
    },
    {
      id: 2,
      title: "Item 2",
      description: "This is the second item",
    },
    {
      id: 3,
      title: "Item 3",
      description: "This is the third item",
    },
    {
      id: 4,
      title: "Item 4",
      description: "This is the fourth item",
    },
  ],
};

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addPost: (state, action) => {
      state.posts.push(action.payload);
    },
    removePost: (state, action) => {
      state.posts = state.posts.filter((post) => post.id !== action.payload);
    },
    updatePost: (state, action) => {
      state.posts = state.posts.map((post) => {
        if (post.id === action.payload.id) {
          return action.payload;
        }
        return post;
      });
    },
  },
});

// Action creators are generated for each case reducer function
export const { addPost, removePost,editPost} = postsSlice.actions;
