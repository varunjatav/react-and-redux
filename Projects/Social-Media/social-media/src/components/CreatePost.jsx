/* eslint-disable react/no-unescaped-entities */

import { Form, redirect } from "react-router-dom";




const CreatePost = () => {

 


  return (
    <Form method="POST" className="create-post" >
      <div className="mb-3">
        <label htmlFor="user_Id" className="form-label">
          Enter Your User Id here
        </label>
        <input
          type="text"
          name="userId"
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
          name="title"
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
          name="body"
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
          name="reactions"
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
          name="tags"
          className="form-control"
          id="tags"
          placeholder="Please enter tags using spaces"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Post
      </button>
    </Form>
  );
};


export const createPostAction = async(data) => {
  const formData = await data.request.formData();
  const postData = Object.fromEntries(formData);
  postData.tags = postData.tags.split(" ");
  console.log(postData);

  fetch("https://dummyjson.com/posts/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(postData),
  })
    .then((res) => res.json())
    .then((post) => {
      console.log(post)
     
    });
    return redirect("/");

}
export default CreatePost;
