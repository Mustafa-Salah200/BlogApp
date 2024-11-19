import { useNavigate } from "react-router-dom";
import Form from "../Form/Form";
import "./Write.css";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddBlog } from "../../Store/Slice/Blogs-Slice";
import { ErrorValidation } from "./ErrorValidation";

const Write = () => {
  const user = useSelector((store) => store.ActiveUser);
  const [show, setShow] = useState(false);
  const [category, setCategory] = useState("Programming");
  const [formData, setFormData] = useState({
    title: "",
    content: "",
  });
  const [errorForm, setErrorForm] = useState({
    title: "",
    content: "",
  });
  const categories = ["Programming", "Data Science", "Technology"];
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const HandleInput = () => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };
  const PublishData = () => {
    const errorObj = ErrorValidation(formData);
    setErrorForm(errorObj);
    if (
      !errorObj.title &&
      !errorObj.content &&
      formData.title.trim() !== "" &&
      formData.content.trim() !== ""
    ) {
      const ob = {
        id: Date.now(),
        title: formData.title,
        content: formData.content,
        category: category,
        createAt: `${new Date()}`,
        author: `${user.FName} ${user.LName}`,
        authorEmail: `${user.Email}`,
        userID: user.id,
        comments: [],
      };
      dispatch(AddBlog(ob));
      navigate("/");
    }
  };
  const handleToggle = () => {
    setShow(!show);
  };
  const handleCategory = (value) => {
    setCategory(value);
    setShow(!show);
  };
  let menuRef = useRef();
  useEffect(() => {
    const handler = (e) => {
      if (!menuRef?.current?.contains(e.target)) {
        setShow(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  return (
    <div className="writeBlog">
      <div className="blog-nav">
        <button className="back" onClick={() => navigate("/")}>
          <svg
            fill="currentcolor"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
          </svg>
          Back
        </button>
        <button className="publish" onClick={() => PublishData()}>
          Publish
        </button>
      </div>
      <h1>CREATE NEW BLOG</h1>
      {errorForm.title || errorForm.content ? (
        <div className="error">
          {errorForm.title && <p>{errorForm.title}</p>}
          {errorForm.content && <p>{errorForm.content}</p>}
        </div>
      ) : (
        ""
      )}

      <Form HandleInput={HandleInput} />
      <div className="categories">
        <h2>SELECT CATEGORIES:</h2>
        <div>
          <h3 onClick={() => handleToggle()}>{category}</h3>
          {show && (
            <ul ref={menuRef}>
              {categories &&
                categories.map((category, index) => {
                  return (
                    <li key={index} onClick={() => handleCategory(category)}>
                      {category}
                    </li>
                  );
                })}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Write;
