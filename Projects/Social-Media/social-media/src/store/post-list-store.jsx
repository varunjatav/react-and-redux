/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import { createContext, useReducer } from "react";

export const PostContext = createContext({
  postList: [],
  addPost: () => {},
  getPosts: () => {},
  deletePost: () => {},
});
// eslint-disable-next-line no-unused-vars
const postListReducer = (currPostList, action) => {
  let newPostList = currPostList;
  if (action.type === "DELETE_POST") {
    newPostList = currPostList.filter(
      (post) => post.id !== action.payload.postId
    );
  } else if (action.type === "GET_POSTS") {
    newPostList = action.payload.posts;
  } else if (action.type === "ADD_POST") {
    newPostList = [action.payload, ...currPostList];
  }
  return newPostList;
};

const PostContextProvider = ({ children }) => {
  // eslint-disable-next-line no-unused-vars

  const [postList, dispatchPostList] = useReducer(postListReducer, []);
  const addPost = ({ userId, title, content, reaction, tag }) => {
    dispatchPostList({
      type: "ADD_POST",
      payload: {
        id: Date.now(),
        title: title,
        body: content,
        reactions: reaction,
        user_ID: userId,
        tags: tag,
      },
    });
  };
  const getPosts = (posts) => {
    dispatchPostList({
      type: "GET_POSTS",
      payload: {
        posts,
      },
    });
  };
  const deletePost = (postId) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: {
        postId,
      },
    });
  };
  return (
    <PostContext.Provider value={{ postList, addPost, getPosts, deletePost }}>
      {children}
    </PostContext.Provider>
  );
};

export default PostContextProvider;
