/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
/* eslint-disable react/no-unescaped-entities */

// eslint-disable-next-line react/prop-types
import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { PostContext } from "../store/post-list-store";

const Post = ({id,title, body, reactions, tags, image }) => {
  const {deletePost} = useContext(PostContext);
  return (
    <div className="card post-card">
      <img src={image} className="card-img-top" alt="..." />
      <div  className="card-body">
        <h5 className="card-title">
          {title}
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" onClick={() => deletePost(id)}>
            <MdDelete />
          </span>
        </h5>
        <p className="card-text">{body}</p>
        {tags.map((tag) => (
          <span  key={tag} className="badge text-bg-primary hashtag">{tag}</span>
        ))}
        <div className="alert alert-success reactions" role="alert">
          This post is reacted by {reactions} peoples 
        </div>
      </div>
    </div>
  );
};

export default Post;
