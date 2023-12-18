/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import { createContext, useReducer } from "react";

export const PostContext = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});
// eslint-disable-next-line no-unused-vars
const postListReducer = (currPostList, action) => {
    let newPostList = currPostList;
    if(action.type === "DELETE_POST") {
        newPostList = currPostList.filter(
            (post) => post.id !== action.payload.postId
            );
    }else if(action.type === "ADD_POST"){
      newPostList = [action.payload, ...currPostList];
    }
  return newPostList;
};

const PostContextProvider = ({ children }) => {
  // eslint-disable-next-line no-unused-vars

  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    DEFAULT_POST_LIST
  );
  const addPost = ({userId, post,title,content,reaction,tag}) => {
    dispatchPostList({
      type: "ADD_POST",
      payload: {
        id: Date.now(),
        image: post,
        title: title,
        body: content,
        reactions: reaction,
        user_ID: userId,
        tags: tag,
      }
    })
  };

  const deletePost = (postId) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload:{
        postId,
      } 
    });
  };
  return (
    <PostContext.Provider value={{ postList, addPost, deletePost }}>
      {children}
    </PostContext.Provider>
  );
};

const DEFAULT_POST_LIST = [
  {
    id: "1",
    image:
      "https://i1.wp.com/chipjourney.com/wp-content/uploads/2020/01/Multi-day-Mumbai-Tour.jpg?fit=1200%2C917&ssl=1",
    title: "Going to Mumbai",
    body: "Hii friends, I am  going to mumbai for my vacations. Hope to Enjoy a Lot. Peace out.",
    reactions: "3",
    user_ID: "user-9",
    tags: ["vacations", "Mumbai", "Enjoying"],
  },
  {
    id: "2",
    image:
      "https://www.xtreamyouth.com/xy_articleimages/2015-10-08_graduation-2015_thumb.jpg",
    title: "Pass ho gye Bhai",
    body: "4 saal masti krke bhi B.tech me pass ho gye, Unbelievable",
    reactions: "4",
    user_ID: "user-15",
    tags: ["Graduated", "Unbelievable"],
  },
];

export default PostContextProvider;
