import Post from "./Post";

import WelcomMessage from "./WelcomMessage";

import { useLoaderData } from "react-router-dom";

const PostsList = () => {
  const postList = useLoaderData();

  return (
    <div className="postList">
      {postList.length === 0 && <WelcomMessage />}
      {postList.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          title={post.title}
          body={post.body}
          reactions={post.reactions}
          tags={post.tags}
        />
      ))}
    </div>
  );
};

export const postLoader = () => {
  return fetch("https://dummyjson.com/posts")
    .then((res) => res.json())
    .then((data) => {
      return data.posts;
    });
};

export default PostsList;
