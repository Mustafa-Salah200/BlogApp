import { useSelector } from "react-redux";
import "./Me.css";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Blog from "../Blog/Blog";
import m1 from "../../assest/profile.svg";
import m2 from "../../assest/pen1.svg";
const Me = () => {
  const [section, setSection] = useState("home");
  // const [profilePic, setProfilePic] = useState("");

  const { id } = useParams();
  const User = useSelector((store) => store.Users).find(
    (user) => user.Email === id
  );
  const Blogs = useSelector((store) => store.Blogs).filter(
    (blog) => blog.userID === User.id
  );
  const ActiveUser = useSelector((store) => store.ActiveUser);
  // console.log(ActiveUser);

  // console.log(Blogs);

  // const HandlePic = (e) => {
  //   const file = e.target.files[0];
  //   const reader = new FileReader();
  //   reader.addEventListener("load", () => {
  //     if (file.size < 3000000) {
  //       const url = reader.result;
  //       setProfilePic(url);
  //     }
  //   });
  //   reader.readAsDataURL(file);
  // };
  return (
    <div className="me">
      <div className="top">
        <div className="info">
          <div className="image">
            <img src={m1} alt="" />
          </div>
          <div className="more">
            <h1>
              {User.FName} {User.LName}
            </h1>
            {ActiveUser.id !== User.id && <button>Follow</button>}
          </div>
        </div>

        {ActiveUser.id !== User.id && (
          <span>
            <svg width="25" height="25" className="jf ff">
              <path
                fillRule="evenodd"
                d="M5 12.5q0 .828.586 1.414.585.585 1.414.586.828 0 1.414-.586.585-.586.586-1.414 0-.828-.586-1.414A1.93 1.93 0 0 0 7 10.5q-.828 0-1.414.586-.585.586-.586 1.414m5.617 0q0 .828.586 1.414.587.585 1.414.586.828 0 1.414-.586t.586-1.414-.586-1.414a1.93 1.93 0 0 0-1.414-.586q-.827 0-1.414.586-.586.586-.586 1.414m5.6 0q0 .828.586 1.414.585.585 1.432.586.827 0 1.413-.586t.587-1.414q0-.828-.587-1.414a1.93 1.93 0 0 0-1.413-.586q-.847 0-1.432.586t-.587 1.414z"
              ></path>
            </svg>
          </span>
        )}
      </div>
      <div className="links">
        <p
          style={section === "home" ? { color: "#000" } : {}}
          onClick={() => setSection("home")}
        >
          Home
        </p>
        <p
          style={section === "about" ? { color: "#000" } : {}}
          onClick={() => setSection("about")}
        >
          About
        </p>
      </div>

      <div className="content">
        {section === "home" ? (
          <div className="home">
            {Blogs &&
              Blogs.map((blog) => {
                return <Blog key={blog.id} blog={blog} />;
              })}
          </div>
        ) : (
          <div className="about">
            <div className="info">
              <p className="">
                write something about yourself 
                <img src={m2} alt="" />
              </p>
            </div>
            <div className="follow">
              <div className="followers">
                {" "}
                <span></span>Followers
              </div>
              <div className="following">
                {" "}
                <span></span>Following
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Me;
