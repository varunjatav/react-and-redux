import { useContext } from "react";
import Post from "./Post";
import { PostContext } from "../store/post-list-store";
import WelcomMessage from "./WelcomMessage";
import Loader from "./Loader";

const PostsList = () => {
  const { postList, fetching } = useContext(PostContext);
 
  return (
    <div className="postList">
      {fetching && <Loader/>}
      {!fetching && postList.length === 0 && (
        <WelcomMessage  />
      )}
      {!fetching && postList.map((post) => (
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

export default PostsList;
