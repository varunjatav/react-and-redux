import { useContext } from "react";
import Post from "./Post";
import { PostContext } from "../store/post-list-store";

const PostsList = () => {
  const { postList } = useContext(PostContext);
  return (
    <div >
      {postList.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          title={post.title}
          body={post.body}
          reactions={post.reactions}
          tags={post.tags}
          image={post.image}
        />
      ))}
    </div>
  );
};

export default PostsList;
