import { useState } from "react";
import "./App.css";
import CreatePost from "./components/CreatePost";
import Footer from "./components/Footer";
import Header from "./components/Header";
import PostsList from "./components/PostsList";
import Sidebar from "./components/Sidebar";
import PostContextProvider from "./store/post-list-store";

function App() {
  const [selectedTab, setSelectedTab] = useState("Home");
  return (
    <PostContextProvider>
      <div className="app-container">
        <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
        <div className="content">
          <Header />

          {selectedTab === "Home" ? <PostsList /> : <CreatePost />}

          <Footer />
        </div>
      </div>
    </PostContextProvider>
  );
}

export default App;
