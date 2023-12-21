import React from "react";
import ReactDOM from "react-dom/client";
import App from "./routes/App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import PostsList, { postLoader } from "./components/PostsList.jsx";
import CreatePost, { createPostAction } from "./components/CreatePost.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children : [
      {
        path: "/",
        element: <PostsList />,
        loader : postLoader,
      },
      {
        path: "/create-post",
        element: <CreatePost />,
        action: createPostAction
      },
    ]
  },
  

]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);
