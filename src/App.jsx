import { Navigate, Route, Routes } from "react-router-dom";
import Write from "./components/WriteBlog/Write";
import Login from "./components/Login/Login";
import SignUP from "./components/SignUp/SignUP";
import { useSelector } from "react-redux";
import Stories from "./components/Stories/Stories";
import Home from "./components/Home/Home";

const App = () => {
  const ActiveUser = useSelector((store) => store.ActiveUser);

  return (
    <div>
      <Routes>
        <Route path="*" element={<Home />}/>
        <Route path="/signIn" element={<Login />} />
        <Route path="/signUp" element={<SignUP />} />
        <Route path="/stories" element={<Stories />} />
        <Route
          path="/write"
          element={
            ActiveUser.id ? (
              <Write />
            ) : (
              <Navigate to="/">
                <Write />
              </Navigate>
            )
          }
        />
      </Routes>
    </div>
  );
};

export default App;
