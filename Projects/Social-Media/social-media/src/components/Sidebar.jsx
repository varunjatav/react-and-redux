/* eslint-disable react/prop-types */
import { IoMdHome, IoIosCreate } from "react-icons/io";

const Sidebar = ({ selectedTab, setSelectedTab }) => {
  return (
    <div className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark sidebar">
      <a
        href="/"
        className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
      >
        <img src="https://kry.co.jp/images/pic_icon_post.png" alt="logo" width="50px" />
      </a>
      <hr />
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item tabs">
          <a
            href="#"
            className={`nav-link  ${selectedTab === "Home" && "active"}`}
            onClick={() => setSelectedTab("Home")}
          >
            <IoMdHome />
          </a>
        </li>
        <li className="nav-item tabs">
          <a
            href="#"
            className={`nav-link  ${selectedTab === "Create Post" && "active"}`}
            onClick={() => setSelectedTab("Create Post")}
          >
            <IoIosCreate />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
