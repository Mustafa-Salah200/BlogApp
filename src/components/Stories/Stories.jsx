import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";
import "./Stories.css";
import { useNavigate } from "react-router-dom";

const Stories = () => {
  const [userBlogs, setUserBlogs] = useState([]);
  const Blogs = useSelector((store) => store.Blogs);
  const user = useSelector((store) => store.ActiveUser);

  const navigate = useNavigate()
  useEffect(() => {
    const blogs = Blogs.filter((blog) => blog.userID === user.id);
    setUserBlogs(blogs);
  }, []);
  return (
    <div className="stories">
      <div className="top">
        <h1>YOUR STORIES</h1>
        <button onClick={()=> navigate('/write')}>WRITE A STORY</button>
      </div>
      <div className="my-stories">
        {userBlogs.length > 0 ? (
          <div className="blogs">
            {userBlogs.map((blog) => {
              return <Blog key={blog.id} blog={blog} />;
            })}
          </div>
        ) : (
          <p>You haven’t published any public stories yet.</p>
        )}
      </div>
    </div>
  );
};

export default Stories;
