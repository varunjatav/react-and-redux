/* eslint-disable react/no-unescaped-entities */

import { useContext } from "react";
import { useRef } from "react";
import { PostContext } from "../store/post-list-store";

const CreatePost = () => {
  const userIdRef = useRef("");
  const titleRef = useRef("");
  const contentRef = useRef("");
  const reactionRef = useRef("");
  const tagRef = useRef("");
  // eslint-disable-next-line no-unused-vars
  const { addPost } = useContext(PostContext);

 

  
  const handleAdd = (e) => {
    e.preventDefault();

    const title = titleRef.current.value;
    const body = contentRef.current.value;
    const reactions = reactionRef.current.value;
    const userId = userIdRef.current.value;
    const tag = tagRef.current.value.split(" ");
  
    titleRef.current.value = "";
    contentRef.current.value="";
    reactionRef.current.value="";
    userIdRef.current.value="";
    tagRef.current.value="";
    
    fetch("https://dummyjson.com/posts/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title:  title,
        body: body,
        reactions:  reactions,
        userId: userId,
        tags: tag,
      }),
    })
      .then((res) => res.json())
      .then((post) => addPost(post));

   
  };

  return (
    <form className="create-post" onSubmit={(e) => handleAdd(e)}>
      <div className="mb-3">
        <label htmlFor="user_Id" className="form-label">
          Enter Your User Id here
        </label>
        <input
          type="text"
          ref={userIdRef}
          className="form-control"
          id="user_Id"
          placeholder="Enter your User Id"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Post Title
        </label>
        <input
          type="text"
          ref={titleRef}
          className="form-control"
          id="title"
          placeholder="Enter your Post Title"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="body" className="form-label">
          Post Content
        </label>
        <textarea
          type="text"
          ref={contentRef}
          rows="3"
          className="form-control"
          id="body"
          placeholder="Enter your Post Title"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="reactions" className="form-label">
          Number of Reactions
        </label>
        <input
          type="text"
          ref={reactionRef}
          className="form-control"
          id="reactions"
          placeholder="How many peaople are reacted to this post.."
        />
      </div>
      <div className="mb-3">
        <label htmlFor="tags" className="form-label">
          Enter your Hash Tags here
        </label>
        <input
          type="text"
          ref={tagRef}
          className="form-control"
          id="tags"
          placeholder="Please enter tags using spaces"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Post
      </button>
    </form>
  );
};

export default CreatePost;
