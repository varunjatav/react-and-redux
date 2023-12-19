/* eslint-disable react/no-unescaped-entities */

import { useContext } from "react";
import { useRef } from "react"
import { PostContext } from "../store/post-list-store";

const CreatePost = () => {
  const userIdRef = useRef("");
  const titleRef = useRef("");
  const contentRef = useRef("");
  const reactionRef = useRef("");
  const tagRef = useRef("");
  const { addPost } = useContext(PostContext);
  const handleAdd = (e) => {
    e.preventDefault();

    addPost({
      userId : userIdRef.current.value,
      title: titleRef.current.value,
      content: contentRef.current.value,
      reaction: reactionRef.current.value,
      tag: tagRef.current.value.split(" ")
    });
  }

 
  return (
    <form className="create-post" onSubmit={(e) => handleAdd(e)}>
    <div className="mb-3">
      <label htmlFor="user_Id" className="form-label">Enter Your User Id here</label>
      <input type="text" ref={userIdRef}  className="form-control" id="user_Id" placeholder="Enter your User Id"/>
    </div>
    
    <div className="mb-3">
      <label htmlFor="title" className="form-label">Post Title</label>
      <input type="text" ref={titleRef}  className="form-control" id="title" placeholder="Enter your Post Title"/>
    </div>
    <div className="mb-3">
      <label htmlFor="body" className="form-label">Post Content</label>
      <textarea type="text" ref={contentRef}  rows="3" className="form-control" id="body" placeholder="Enter your Post Title"/>
    </div>
    <div className="mb-3">
      <label htmlFor="reactions" className="form-label">Number of Reactions</label>
      <input type="text" ref={reactionRef}  className="form-control" id="reactions" placeholder="How many peaople are reacted to this post.."/>
    </div>
    <div className="mb-3">
      <label htmlFor="tags" className="form-label">Enter your Hash Tags here</label>
      <input type="text" ref={tagRef}  className="form-control" id="tags" placeholder="Please enter tags using spaces"/>
    </div>
    <button type="submit" className="btn btn-primary">Post</button>
  </form>
  )
}

export default CreatePost